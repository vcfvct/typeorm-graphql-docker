"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Location_1 = require("./entity/Location");
const Market_1 = require("./entity/Market");
const Koa = require("koa");
const routes_1 = require("./routes");
const Event_1 = require("./entity/Event");
const EventAttendee_1 = require("./entity/EventAttendee");
const ExtLocation_1 = require("./entity/ExtLocation");
(() => __awaiter(this, void 0, void 0, function* () {
    const conn = yield typeorm_1.createConnection({
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
            Market_1.Market,
            Location_1.Location,
            Event_1.Event,
            EventAttendee_1.EventAttendee,
            ExtLocation_1.ExtLocation
        ]
    });
    const app = new Koa();
    app
        .use(routes_1.routes.routes())
        .use(routes_1.routes.allowedMethods())
        .listen(4000);
}))();
// const locationResolver = {
//   async location(obj, {id}, context, info){
//     const repo = getRepository(Location);
//     return await repo.findOne(id);
//   }
// }
//# sourceMappingURL=index.js.map