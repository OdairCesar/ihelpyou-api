import { IPlatformPlanRepository } from "../../../repositories/IPlatformPlanRepository";
import { PlatformPlan } from "../../../entities/PlatformPlan";
import { IReadPlatformPlanRequestDTO } from "./ReadPlatformPlanDTO";

export class ReadPlatformPlanUseCase {
  constructor (
    private platformPlanRepository: IPlatformPlanRepository,
  ) {}

  async execute(data: IReadPlatformPlanRequestDTO) {
    let ordersEvaluations: PlatformPlan[] = []

    if (data.id) {
      ordersEvaluations.push(await this.platformPlanRepository.findById(data.id))
    } else if (data.name) {
      ordersEvaluations = await this.platformPlanRepository.findByName(data.name)
    } else if (data.periodInMonth) {
      ordersEvaluations = await this.platformPlanRepository.findByPeriodInMonth(data.periodInMonth)
    } else if (data.value) {
      ordersEvaluations = await this.platformPlanRepository.findByValue(data.value)
    } else {
      ordersEvaluations = await this.platformPlanRepository.findAll()
    }

    if (ordersEvaluations.length > 0) return ordersEvaluations


    throw new Error('Não houve resultado nas buscas')
  }
}