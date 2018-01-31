import {Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from 'typeorm';
import {Market} from './Market';

@Entity()
export class Location {
  @PrimaryColumn()
  id: number;

  @Column({nullable: true})
  address1: string;
  @Column({nullable: true})
  address2: string;
  @Column()
  city: string;
  @Column()
  state: string;
  @Column({nullable: true, name: 'zip'})
  postalCode: string;
  @Column()
  description: string;
  @Column()
  timezone: string;
  @Column()
  latitude: number;
  @Column()
  longitude: number;
  @Column({name: 'market_id'})
  marketId: number;
  @ManyToOne(type => Market, market => market.id, {eager: true})
  @JoinColumn({name: 'market_id'})
  market: Market;
  @Column({nullable: true, name: 'cafe_url_link'})
  cafeUrlLink: string;
  @Column({name: 'is_market_level'})
  isMarketLevel: boolean;

  cafeId: number;
}