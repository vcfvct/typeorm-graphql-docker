"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const location_type_1 = require("./gq-typedef/location-type");
const market_types_1 = require("./gq-typedef/market-types");
const graphql_tools_1 = require("graphql-tools");
const ext_location_type_1 = require("./gq-typedef/ext-location-type");
const event_type_1 = require("./gq-typedef/event-type");
const event_attendee_type_1 = require("./gq-typedef/event-attendee-type");
const location_resolver_1 = require("./gq-resolver/location-resolver");
const locations_resolver_1 = require("./gq-resolver/locations-resolver");
const event_search_resolver_1 = require("./gq-resolver/event-search-resolver");
const Query = `
    type Query {
        locations: [Location]
        location(id: Int!): Location
        eventSearch(locationIds: String, startDateTime: String!, endDateTime: String!): [Event]
    }
`;
const schemaDefinition = `
    schema {
        query    : Query
    }
`;
const Mutation = `type Mutation {

}`;
const typeDefs = [
    schemaDefinition,
    Query,
    location_type_1.LocationType, market_types_1.MarketType, ext_location_type_1.ExtLocationType, event_type_1.EventType, event_attendee_type_1.EventAttendeeType
];
exports.schema = graphql_tools_1.makeExecutableSchema({
    typeDefs,
    resolvers: {
        Query: {
            locations: locations_resolver_1.LocationsResolver,
            location: location_resolver_1.LocationResolver,
            eventSearch: event_search_resolver_1.EventSearchResolver
        }
    }
});
//# sourceMappingURL=gq-schema.js.map