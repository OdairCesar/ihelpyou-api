import { PlatformBenefit } from "../entities/PlatformBenefit"

export interface IPlatformBenefitRepository {
  findById(id: string): Promise<PlatformBenefit>
  findByIdPlan(idPlan: string): Promise<Array<PlatformBenefit>>
  insert(platformBenefit: PlatformBenefit): Promise<void>
  update(platformBenefit: PlatformBenefit): Promise<void>
}