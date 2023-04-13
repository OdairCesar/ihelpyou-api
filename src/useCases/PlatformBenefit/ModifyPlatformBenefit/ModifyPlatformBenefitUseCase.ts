import { IPlatformBenefitRepository } from "../../../repositories/IPlatformBenefitRepository";
import { IPlatformPlanRepository } from "../../../repositories/IPlatformPlanRepository";
import { IModifyPlatformBenefitRequestDTO } from "./ModifyPlatformBenefitDTO"

export class ModifyPlatformBenefitUseCase {
  constructor(
    private platformBenefitRepository: IPlatformBenefitRepository,
    private platformPlanRepository: IPlatformPlanRepository
  ) { }

  async execute(data: IModifyPlatformBenefitRequestDTO) {
    const line = await this.platformBenefitRepository.findById(data.id)

    if (!line) {
      throw new Error('O banco informato não existe')
    }

    if (data.idPlan) {
      const plan = await this.platformPlanRepository.findById(data.idPlan)

      if (!plan) throw new Error('Plano informato não existe');
      else line.idPlan = data.idPlan;
    }

    if (data.name) line.name = data.name;
    if (data.description) line.description = data.description;
    if (data.amount) line.amount = data.amount

    await this.platformBenefitRepository.update(line)
  }
}