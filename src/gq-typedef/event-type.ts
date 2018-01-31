export const EventType = `
type Event {
  eventId: Int
    title: String
    eventType: String
    eventStatus: String
    createdBy: String
    description: String
    updatedBy: String
    partnerId: Int
    rsvpCap: Int
    cafeHostId: Int
    locationId: Int
    extLocationId: Int
    cafeHost: Location
    extLocation: ExtLocation
    disclaimer: String
    capitalonePoc: String
    shortDescription: String
    createdDtm: String
    updatedDtm: String
    rsvp: Boolean
    eventAttendees: [EventAttendee]
    startTime: String
    startHr: Int
    startMn: Int
    endTime: String
    endHr: Int
    endMn: Int
    eventUrl: String
    remainingCapacity: Int
 }
`