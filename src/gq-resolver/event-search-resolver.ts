import { getRepository, SelectQueryBuilder } from "typeorm";
import { Event } from "../entity/Event";
import { Location } from "../entity/Location";
import { LocationDao } from "../dao/location-dao";
import { EventDao } from "../dao/event-dao";

export const EventSearchResolver = async (obj: any, args: EventSearchParams, context: any, info: any) => {
  const locationIds: Array<number>  = [];
  if (args.locationIds) {
    if (args.locationIds.split(',').includes('')) {
      throw new Error(`Incorrect Location Ids provided by client: ${args.locationIds}`) 
    } else {
      args.locationIds.split(',').forEach(id => locationIds.push(parseInt(id)));
      const marketLocationId: number = await LocationDao.getMarketLevelId(locationIds[0]);
      marketLocationId && locationIds.push(marketLocationId);
    }
  }
  const rawEvents: Array<Event> = await EventDao.searchEvent(locationIds, args.startDateTime, args.endDateTime);
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
  // delete event.cafeHost.id;
  // delete event.eventAttendees;
  delete event.startTimeString;
  delete event.endTimeString;
  return event;
}