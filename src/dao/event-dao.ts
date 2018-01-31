import { SelectQueryBuilder, getRepository } from "typeorm";
import { Event } from "../entity/Event";

export class EventDao {
  static searchEvent (locationIds: Array<number>, startTime: string, endTime: string, limit?: number): Promise<Array<Event>> {
    const eventTableAlias: string = 'EVENT';
    const locationTableAlias: string = 'LOCATION';
    const qb: SelectQueryBuilder<Event> = getRepository(Event)
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
}