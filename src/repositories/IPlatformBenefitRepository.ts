import { PlatformBenefit } from "../entities/PlatformBenefit"

export interface IPlatformBenefitRepository {
  findById(id: string): Promise<PlatformBenefit>
  findByName(name: string): Promise<Array<PlatformBenefit>>
  findByAmount(amount: number): Promise<Array<PlatformBenefit>>
  findByIdPlan(idPlan: string): Promise<Array<PlatformBenefit>>
  insert(platformBenefit: PlatformBenefit): Promise<void>
  update(platformBenefit: PlatformBenefit): Promise<void>
  delete(platformBenefit: PlatformBenefit): Promise<void>
}