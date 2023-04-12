import { PlatformPlan } from "../../../entities/PlatformPlan";
import { IPlatformPlanRepository } from "../../../repositories/IPlatformPlanRepository";
import { ICreatePlatformPlanRequestDTO } from "./CreatePlatformPlanDTO"

export class CreatePlatformPlanUseCase {
  constructor(
    private platformPlanRepository: IPlatformPlanRepository,
  ) { }

  async execute(data: ICreatePlatformPlanRequestDTO) {
    const platformPlan = await this.platformPlanRepository.findByPeriodInMonth(data.periodInMonth)

    if (platformPlan.length > 0) {
      throw new Error('Já um plano usando essa quantidade de mês')
    }

    const newPlatformPlan = new PlatformPlan(data)

    await this.platformPlanRepository.insert(newPlatformPlan)
  }
}