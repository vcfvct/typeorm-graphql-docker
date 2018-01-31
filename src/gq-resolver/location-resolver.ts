import { getRepository } from 'typeorm';
import { Location } from '../entity/Location';

export const LocationResolver = async (obj: any, { id }: any, context: any, info: any) => {
  const repo = getRepository(Location);
  return await repo.findOne(id);
}