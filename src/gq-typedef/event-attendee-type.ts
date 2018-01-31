export const EventAttendeeType = `
  type EventAttendee{
    id: Int
    eventId: Int
    event: Event
    ticketNum: String
    attendanceStatus: String
    firstName: String
    lastName: String
    email: String
    zipcode: String
    rsvpDate: String
    checkin: Boolean
  }
`