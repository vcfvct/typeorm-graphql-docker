import {Column, Entity, PrimaryColumn} from 'typeorm';

@Entity({name: 'event_partner'})
export class EventPartner {
  @PrimaryColumn()
  id: number;
  @Column({name: 'partner_name'})
  partnerName: string;
  @Column({name: 'partner_logo'})
  partnerLogo: string;
}