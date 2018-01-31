"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const koaBody = require("koa-bodyparser");
const apollo_server_koa_1 = require("apollo-server-koa");
const gq_schema_1 = require("./gq-schema");
exports.routes = new Router();
// API entrypoint
const apiEntrypointPath = '/graphql';
const graphQlOpts = apollo_server_koa_1.graphqlKoa({
    schema: gq_schema_1.schema,
    context: { msg: 'hello context' }
});
exports.routes.get(apiEntrypointPath, graphQlOpts);
exports.routes.post(apiEntrypointPath, koaBody(), graphQlOpts);
// GraphiQL entrypoint
exports.routes.get('/graphiql', apollo_server_koa_1.graphiqlKoa({ endpointURL: apiEntrypointPath }));
//# sourceMappingURL=routes.js.map