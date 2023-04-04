import { PlatformPlan } from "../../../entities/PlatformPlan";
import { IPlatformPlanRepository } from "../../../repositories/IPlatformPlanRepository";
import { ICreatePlatformPlanRequestDTO } from "./CreatePlatformPlanDTO"

export class CreatePlatformPlanUseCase {
  constructor(
    private platformPlanRepository: IPlatformPlanRepository,
  ) { }

  async execute(data: ICreatePlatformPlanRequestDTO) {
    const platformPlan = new PlatformPlan(data)

    this.platformPlanRepository.insert(platformPlan)
  }
}