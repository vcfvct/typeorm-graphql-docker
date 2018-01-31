import 'reflect-metadata';

import * as Koa from 'koa';
import { routes } from './routes';
import { initDatabase } from './data-source';

(async () => {
  initDatabase()
  const app = new Koa();
  app.use(routes.routes())
    .use(routes.allowedMethods())
    .listen(4000);
})();