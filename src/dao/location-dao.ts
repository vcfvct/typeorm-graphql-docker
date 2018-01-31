import { Location } from "../entity/Location";
import { getRepository } from "typeorm";

export class LocationDao {
  static async getMarketLevelId(locationId: number): Promise<number> {
    const marketLevelLocation: Location = await getRepository(Location)
      .createQueryBuilder('location')
      .select('location.id')
      .leftJoinAndSelect(Location, 'location1', 'location1.market = location.market')
      .where('location1.id = :locationId', { locationId })
      .andWhere('location.isMarketLevel = true')
      .getOne();
    return marketLevelLocation.id;
  }
}