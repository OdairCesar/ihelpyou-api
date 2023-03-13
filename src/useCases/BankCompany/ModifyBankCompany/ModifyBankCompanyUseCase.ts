import { IBankCompanyRepository } from "../../../repositories/IBankCompanyRepository";
import { IModifyBankCompanyRequestDTO } from "./ModifyBankCompanyDTO"

export class ModifyBankCompanyUseCase {
  constructor(
    private bankCompanyRepository: IBankCompanyRepository
  ) { }

  async execute(data: IModifyBankCompanyRequestDTO) {
    const line = await this.bankCompanyRepository.findById(data.id)

    if (!line) {
      throw Error('O banco informato não existe')
    }

    if (data.bank) {
      line.bank = data.bank
    }

    if (data.pix) {
      line.pix = data.pix
    }

    await this.bankCompanyRepository.update(line)
  }
}