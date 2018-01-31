import { getRepository, SelectQueryBuilder } from "typeorm";
import { Event } from "../entity/Event";
import { Location } from "../entity/Location";

export const EventSearchResolver = async (obj: any, args: EventSearchParams, context: any, info: any) => {
  const locationIds: Array<number>  = [];
  if (args.locationIds) {
    if (args.locationIds.split(',').includes('')) {
      throw new Error(`Incorrect Location Ids provided by client: ${args.locationIds}`) 
    } else {
      args.locationIds.split(',').forEach(id => locationIds.push(parseInt(id)));
      const marketLocationId: number = await getMarketLevelId(locationIds[0]);
      marketLocationId && locationIds.push(marketLocationId);
    }
  }
  const rawEvents: Array<Event> = await searchEvent(locationIds, args.startDateTime, args.endDateTime);
  return rawEvents.map(eventsPostProcess); 
}

function eventsPostProcess(event: Event): Event {
  const startDate: Date = new Date(event.startTimeString);
  const endDate: Date = new Date(event.endTimeString);
  event.startTime = startDate.getTime();
  event.startHr = startDate.getHours();
  event.startMn = startDate.getMinutes();
  event.endTime = endDate.getTime();
  event.endHr = endDate.getHours();
  event.endMn = endDate.getMinutes();
  event.remainingCapacity = event.rsvpCap - event.eventAttendees.length;
  // add eventUrl
  const normalizedTitle: string = event.title.replace(/\s/g, '-').replace(/[/#+$~%"*?<>^{}]/g, '_');
  event.eventUrl = `/${normalizedTitle}-${event.eventId}`;
  // rename id to cafeID
  // event.cafeHost.cafeId = event.cafeHost.id;
  delete event.startTimeString;
  delete event.endTimeString;
  // delete event.cafeHost.id;
  // delete event.eventAttendees;
  return event;
}


const searchEvent = (locationIds: Array<number>, startTime: string, endTime: string, limit?: number): Promise<Array<Event>> => {
  const eventTableAlias: string = 'EVENT';
  const locationTableAlias: string = 'LOCATION';
  // const eventFields: Array<string> = ['eventId', 'title', 'eventType', 'eventStatus', 'description', 'rsvpCap', 'disclaimer', 'shortDescription', 'rsvp', 'startTimeString', 'endTimeString'].map(f => eventTableAlias + '.' + f);
  // const locationFields: Array<string> = ['address1', 'city', 'state', 'postalCode', 'timezone', 'latitude', 'longitude', 'cafeUrlLink', 'id'].map(f => locationTableAlias + '.' + f);
  const qb: SelectQueryBuilder<Event> = 
    getRepository(Event)
    .createQueryBuilder(eventTableAlias)
    // .select([...eventFields, ...locationFields])
    .innerJoinAndSelect(`${eventTableAlias}.cafeHost`, locationTableAlias)
    .leftJoinAndSelect(`${eventTableAlias}.eventAttendees`, 'attendee')
    .where(`${eventTableAlias}.startTimeString > :startTime`)
    .andWhere(`${eventTableAlias}.endTimeString <= :endTime`)
    .andWhere(`(${eventTableAlias}.eventStatus = :liveStatus OR ${eventTableAlias}.eventStatus= :cancelStatus)`, {
      liveStatus: 'LIVE',
      cancelStatus: 'CANCELLED'
    })
    .orderBy(`${eventTableAlias}.startTimeString`, 'ASC')
    .setParameters({ startTime, endTime });
  locationIds.length && qb.andWhere(`${eventTableAlias}.cafeHostId IN (:locationIds)`, { locationIds });
  limit && limit > 0 && qb.take(limit);
  console.log(`start query ${startTime}, ${endTime}, ${locationIds.length}`);
  return qb.getMany();
}

const getMarketLevelId = async (locationId: number): Promise<number> => {
  const marketLevelLocation: Location = await 
    getRepository(Location)
    .createQueryBuilder('location')
    .select('location.id')
    .leftJoinAndSelect(Location, 'location1', 'location1.market = location.market')
    .where('location1.id = :locationId', { locationId })
    .andWhere('location.isMarketLevel = true')
    .getOne();
  return marketLevelLocation.id;
}