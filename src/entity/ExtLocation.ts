import {Column, Entity, JoinColumn, PrimaryColumn} from 'typeorm';

@Entity()
export class ExtLocation {
  @PrimaryColumn()
  id: number;
  @Column()
  address1: string;
  @Column({nullable: true})
  address2: string;
  @Column()
  city: string;
  @Column()
  state: string;
  @Column()
  zip: string;
  @Column()
  description: string;
  @Column()
  timezone: string;
  @Column()
  latitude: number;
  @Column()
  longitude: number;
  @Column({name: 'market_id', nullable: true}) //note: this col has no data in the qa db
  marketId: number;
}