import {Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from 'typeorm';
import {Event} from './Event';

@Entity({name: 'event_attendee'})
export class EventAttendee {
  @PrimaryColumn()
  id: number;

  @Column({name: 'event_id'})
  eventId: number;
  @JoinColumn({name: 'event_id'})
  @ManyToOne(type => Event, event => event.eventAttendees)
  event: Event;

  @Column({name: 'ticket_num'})
  ticketNum: string;
  @Column({name: 'attendance_status'})
  attendanceStatus: string;
  @Column({name: 'first_name'})
  firstName: string;
  @Column({name: 'last_name'})
  lastName: string;
  @Column({name: 'email'})
  email: string;
  @Column()
  zipcode: string;
  @Column({name: 'rsvp_date'})
  rsvpDate: string;
  @Column()
  checkin: boolean;

}