import { IPlatformPlanRepository } from "../../IPlatformPlanRepository";
import { PlatformPlan } from "../../../entities/PlatformPlan"
import { Repository } from "typeorm";
import { PlatformPlanORM } from "../../../database/typeorm/entity/PlatformPlanORM";

export class PlatformPlanRepository implements IPlatformPlanRepository {

  constructor (
    private platformPlanRepository: Repository<PlatformPlanORM>
  ) { }


  async findById(id: string): Promise<PlatformPlan> {
    return await this.platformPlanRepository.findOneBy({
      id: id
    })
  }
  

  async findByName(name: string): Promise<PlatformPlan> {
    return await this.platformPlanRepository.findOneBy({
      name: name
    })
  }
  

  async insert(platformPlan: PlatformPlan): Promise<void> {
    await this.platformPlanRepository.insert(platformPlan)
  }
  

  async update(platformPlan: PlatformPlan): Promise<void> {
    if (typeof platformPlan.id === 'string') this.platformPlanRepository.update({ id: platformPlan.id }, platformPlan)
  }
  

}