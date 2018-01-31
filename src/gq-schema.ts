import { getRepository } from 'typeorm';
import { Location } from './entity/Location';
import { LocationType } from './gq-typedef/location-type';
import { MarketType } from './gq-typedef/market-types';
import { makeExecutableSchema } from 'graphql-tools';
import { Market } from './entity/Market';

const Query = `
    type Query {
        locations: [Location]
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
    LocationType, MarketType
];


 export const schema = makeExecutableSchema({
    typeDefs,
    resolvers: {Query: {locations: async () =>{
      // const repo = getRepository(Location).createQueryBuilder('location').leftJoinAndSelect('location.market', 'market');
      const repo = getRepository(Location);
      return await repo.find();
      // return await repo.getMany();
    }} }
});