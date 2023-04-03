import { IPlatformBenefitRepository } from "../../../repositories/IPlatformBenefitRepository";
import { IModifyPlatformBenefitRequestDTO } from "./ModifyPlatformBenefitDTO"

export class ModifyPlatformBenefitUseCase {
  constructor(
    private platformBenefitRepository: IPlatformBenefitRepository
  ) { }

  async execute(data: IModifyPlatformBenefitRequestDTO) {
    const line = await this.platformBenefitRepository.findById(data.id)

    if (!line) {
      throw Error('O banco informato não existe')
    }

    if (data.name) line.name = data.name;
    if (data.description) line.description = data.description;
    if (data.amount) line.amount = data.amount

    await this.platformBenefitRepository.update(line)
  }
}