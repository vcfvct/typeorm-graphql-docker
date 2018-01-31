import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Location } from './entity/Location';
import { Market } from './entity/Market';
import { Connection } from 'typeorm/connection/Connection';
import * as Koa from 'koa';
import { routes } from './routes';


(async () => {

  const conn: Connection = await createConnection({
    name: 'default',
    type: 'postgres',
    host: 'esa-qa1-postgresql-rds.cvg63gqqyfjt.us-east-1.rds.amazonaws.com',
    port: 5432,
    username: 'esa',
    password: Buffer.from('ZXNhcG9zdGdyZXM=', 'base64').toString('ascii'),
    database: 'esa',
    synchronize: false,
    logging: true,
    entities: [
      Market,
      Location,
    ]
  });

  const app = new Koa();
  app
      .use(routes.routes())
      .use(routes.allowedMethods())
      .listen(3000);

})();




// const locationResolver = {
//   async location(obj, {id}, context, info){
//     const repo = getRepository(Location);
//     return await repo.findOne(id);
//   }
// }
