import { PlatformBenefit } from "../../../entities/PlatformBenefit";
import { IPlatformBenefitRepository } from "../../../repositories/IPlatformBenefitRepository";
import { IPlatformPlanRepository } from "../../../repositories/IPlatformPlanRepository";
import { ICreatePlatformBenefitRequestDTO } from "./CreatePlatformBenefitDTO"

export class CreatePlatformBenefitUseCase {
  constructor(
    private platformBenefitRepository: IPlatformBenefitRepository,
    private platformPlanRepository: IPlatformPlanRepository
  ) { }

  async execute(data: ICreatePlatformBenefitRequestDTO) {
    const plan = await this.platformPlanRepository.findById(data.idPlan)

    if (!plan) {
      throw new Error('Plano da plataforma está inválida')
    }

    const platformBenefit = new PlatformBenefit(data)

    await this.platformBenefitRepository.insert(platformBenefit)
  }
}