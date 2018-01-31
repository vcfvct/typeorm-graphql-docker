import {Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn} from 'typeorm';
import {Location} from './Location';
import {ExtLocation} from './ExtLocation';
import {EventAttendee} from './EventAttendee';

@Entity()
export class Event {
  @PrimaryColumn({name: 'id'})
  eventId: number;
  @Column({nullable: true})
  title: string;
  @Column({nullable: true, name: 'event_type'})
  eventType: string;
  @Column({nullable: true, name: 'status'})
  eventStatus: string;
  @Column({nullable: true, name: 'created_by'})
  createdBy: string;
  @Column()
  description: string;
  @Column({nullable: true, name: 'updated_by'})
  updatedBy: string;
  @Column({name: 'partner_id'})
  partnerId: number;
  @Column({name: 'rsvp_cap'})
  rsvpCap: number;
  @Column({name: 'cafe_host_id'})
  cafeHostId: number;
  @Column({name: 'location_id'})
  locationId: number;
  @Column({name: 'ext_location_id'})
  extLocationId: number;
  @OneToOne(type => Location, location => location.id)
  @JoinColumn({name: 'cafe_host_id'})
  cafeHost: Location;
  @OneToOne(type => ExtLocation, extLocation => extLocation.id)
  @JoinColumn({name: 'ext_location_id'})
  extLocation: ExtLocation;
  @Column({nullable: true, name: 'disclaimer'})
  disclaimer: string;
  @Column({nullable: true, name: 'capitalone_poc'})
  capitalonePoc: string;
  @Column({nullable: true, name: 'short_desc'})
  shortDescription: string;
  @Column('timestamp', {name: 'start_time'})
  startTimeString: string;
  @Column('timestamp', {name: 'end_time'})
  endTimeString: string;
  @Column('timestamp', {name: 'created_dtm'})
  createdDtm: string;
  @Column('timestamp', {name: 'updated_dtm'})
  updatedDtm: string;
  @Column({name: 'rsvp'})
  rsvp: boolean;
  @OneToMany(type => EventAttendee, eventAttendee => eventAttendee.event)
  eventAttendees: EventAttendee[];
  startTime: number;
  startHr: number;
  startMn: number;
  endTime: number;
  endHr: number;
  endMn: number;
  eventUrl: string;
  remainingCapacity: number;
}