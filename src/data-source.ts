import { Event } from './entity/Event';
import { EventAttendee } from './entity/EventAttendee';
import { ExtLocation } from './entity/ExtLocation';
import { createConnection } from 'typeorm';
import { Location } from './entity/Location';
import { Market } from './entity/Market';
import { Connection } from 'typeorm/connection/Connection';

export const initDatabase = async (): Promise<Connection> => {
  return await createConnection({
    name: 'default',
    type: 'postgres',
    host: 'esa-qa1-postgresql-rds.cvg63gqqyfjt.us-east-1.rds.amazonaws.com',
    port: 5432,
    username: 'esa',
    password: Buffer.from('ZXNhcG9zdGdyZXM=', 'base64').toString('ascii'),
    database: 'esa',
    synchronize: false,
    logging: true,
    extra: {
      ssl: true,
      max: 5,
      min: 1,
      idleTimeoutMillis: 300000,
      connectionTimeoutMillis: 1000
    },
    entities: [
      Market,
      Location,
      Event,
      EventAttendee,
      ExtLocation
    ]
  });
}