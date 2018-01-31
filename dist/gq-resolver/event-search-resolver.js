"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Event_1 = require("../entity/Event");
exports.EventSearchResolver = (obj, args, context, info) => __awaiter(this, void 0, void 0, function* () {
    let locationIds = [];
    // args.locationIds && args.split 
    const rawEvents = yield searchEvent([], args.startDateTime, args.endDateTime);
    return rawEvents.map(eventsPostProcess);
});
function eventsPostProcess(event) {
    const startDate = new Date(event.startTimeString);
    const endDate = new Date(event.endTimeString);
    event.startTime = startDate.getTime();
    event.startHr = startDate.getHours();
    event.startMn = startDate.getMinutes();
    event.endTime = endDate.getTime();
    event.endHr = endDate.getHours();
    event.endMn = endDate.getMinutes();
    event.remainingCapacity = event.rsvpCap - event.eventAttendees.length;
    // add eventUrl
    const normalizedTitle = event.title.replace(/\s/g, '-').replace(/[/#+$~%"*?<>^{}]/g, '_');
    event.eventUrl = `/${normalizedTitle}-${event.eventId}`;
    // rename id to cafeID
    // event.cafeHost.cafeId = event.cafeHost.id;
    delete event.startTimeString;
    delete event.endTimeString;
    // delete event.cafeHost.id;
    delete event.eventAttendees;
    return event;
}
const searchEvent = (locationIds, startTime, endTime, limit) => {
    const eventTableAlias = 'EVENT';
    const locationTableAlias = 'LOCATION';
    const eventFields = ['eventId', 'title', 'eventType', 'eventStatus', 'description', 'rsvpCap', 'disclaimer', 'shortDescription', 'rsvp', 'startTimeString', 'endTimeString'].map(f => eventTableAlias + '.' + f);
    const locationFields = ['address1', 'city', 'state', 'postalCode', 'timezone', 'latitude', 'longitude', 'cafeUrlLink', 'id'].map(f => locationTableAlias + '.' + f);
    const qb = typeorm_1.getRepository(Event_1.Event)
        .createQueryBuilder(eventTableAlias)
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
};
//# sourceMappingURL=event-search-resolver.js.map