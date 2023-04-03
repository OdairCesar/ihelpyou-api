import { IPlatformBenefitRepository } from "../../../repositories/IPlatformBenefitRepository";

export class DeletePlatformBenefitUseCase {
  constructor (
    private platformBenefitRepository: IPlatformBenefitRepository
  ) { }

  async execute(data: IPlatformBenefitRequestDTO) {
    const platformBenefit = await this.platformBenefitRepository.findById(data.id)

    if (!platformBenefit){
      throw Error('Não foi possivel deletar essa analise')
    }

    await this.platformBenefitRepository.delete(platformBenefit)
  }
}