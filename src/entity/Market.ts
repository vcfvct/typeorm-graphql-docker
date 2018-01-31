import {Column, Entity, PrimaryColumn} from 'typeorm';

@Entity()
export class Market {
  @PrimaryColumn()
  id: number;
  @Column()
  name: string;
}