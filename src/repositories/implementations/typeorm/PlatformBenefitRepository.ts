import { Like, Repository } from "typeorm";
import { PlatformBenefit } from "../../../entities/PlatformBenefit"
import { IPlatformBenefitRepository } from "../../IPlatformBenefitRepository";
import { PlatformBenefitORM } from "../../../database/typeorm/entity/PlatformBenefitORM";

export class PlatformBenefitRepository implements IPlatformBenefitRepository {

  constructor (
    private platformBenefitRepository: Repository<PlatformBenefitORM>
  ) { }


  async findById(id: string): Promise<PlatformBenefit> {
    return await this.platformBenefitRepository.findOneBy({
      id: id
    })
  }


  async findByName(name: string): Promise<PlatformBenefit[]> {
    return await this.platformBenefitRepository.findBy({
      name: Like('%'+name+'%')
    })
  }


  async findByAmount(amount: number): Promise<PlatformBenefit[]> {
    return await this.platformBenefitRepository.findBy({
      amount: amount
    })
  }


  async findByIdPlan(idPlan: string): Promise<Array<PlatformBenefit>> {
    return await this.platformBenefitRepository.findBy({
      idPlan: {
        id: idPlan
      }
    })
  }


  async insert(platformBenefit: PlatformBenefit): Promise<void> {
    await this.platformBenefitRepository.insert(platformBenefit)
  }


  async update(platformBenefit: PlatformBenefit): Promise<void> {
    if (typeof platformBenefit.id === 'string') this.platformBenefitRepository.update({ id: platformBenefit.id }, platformBenefit)
  }


  async delete(platformBenefit: PlatformBenefit): Promise<void> {
    if (typeof platformBenefit.id === 'string') this.platformBenefitRepository.delete({ id: platformBenefit.id })
  }
}