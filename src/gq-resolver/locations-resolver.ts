import { getRepository } from 'typeorm';
import { Location } from '../entity/Location';

export const LocationsResolver = async () => {
  // const repo = getRepository(Location).createQueryBuilder('location').leftJoinAndSelect('location.market', 'market');
  // return await repo.getMany();
  const repo = getRepository(Location);
  return await repo.find();
}