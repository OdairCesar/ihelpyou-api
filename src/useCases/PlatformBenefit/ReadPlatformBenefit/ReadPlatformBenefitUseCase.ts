import { IPlatformBenefitRepository } from "../../../repositories/IPlatformBenefitRepository";
import { PlatformBenefit } from "../../../entities/PlatformBenefit";
import { IReadPlatformBenefitRequestDTO } from "./ReadPlatformBenefitDTO";

export class ReadPlatformBenefitUseCase {
  constructor (
    private platformBenefitRepository: IPlatformBenefitRepository,
  ) {}

  async execute(data: IReadPlatformBenefitRequestDTO) {
    let platformBenefits: PlatformBenefit[] = []

    if (data.id) {
      platformBenefits.push(await this.platformBenefitRepository.findById(data.id))
    } else if (data.name) {
      platformBenefits = await this.platformBenefitRepository.findByName(data.name)
    } else if (data.amount) {
      platformBenefits = await this.platformBenefitRepository.findByAmount(data.amount)
    } else if (data.idPlan) {
      platformBenefits = await this.platformBenefitRepository.findByIdPlan(data.idPlan)
    }

    if (platformBenefits.length > 0) return platformBenefits

    throw new Error('Não houve resultado nas buscas')
  }
}