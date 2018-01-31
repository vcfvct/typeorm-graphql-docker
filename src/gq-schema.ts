import { LocationType } from './gq-typedef/location-type';
import { MarketType } from './gq-typedef/market-types';
import { makeExecutableSchema } from 'graphql-tools';
import { Market } from './entity/Market';
import { ExtLocationType } from './gq-typedef/ext-location-type';
import { EventType } from './gq-typedef/event-type';
import { EventAttendeeType } from './gq-typedef/event-attendee-type';
import { LocationResolver } from './gq-resolver/location-resolver';
import { LocationsResolver } from './gq-resolver/locations-resolver';
import { EventSearchResolver } from './gq-resolver/event-search-resolver';

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

}`
const typeDefs = [
  schemaDefinition,
  Query,
  LocationType, MarketType, ExtLocationType, EventType, EventAttendeeType
];



export const schema = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: {
      locations: LocationsResolver,
      location: LocationResolver,
      eventSearch: EventSearchResolver
    }
  }
});