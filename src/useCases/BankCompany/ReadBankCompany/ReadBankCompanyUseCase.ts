import { IBankCompanyRepository } from "../../../repositories/IBankCompanyRepository";
import { BankCompany } from "../../../entities/BankCompany";
import { IReadBankCompanyRequestDTO } from "./ReadBankCompanyDTO";

export class ReadBankCompanyUseCase {
  constructor (
    private bankCompanyRepository: IBankCompanyRepository,
  ) {}

  async execute(data: IReadBankCompanyRequestDTO) {
    let banksCompany: BankCompany[] = []

    if (data.id) {
      banksCompany.push(await this.bankCompanyRepository.findById(data.id))
    } else if (data.bank) {
      banksCompany = await this.bankCompanyRepository.findByBank(data.bank)
    } else if (data.pix) {
      banksCompany.push(await this.bankCompanyRepository.findByPix(data.pix))
    } else if (data.idCompany) {
      banksCompany = await this.bankCompanyRepository.findByIdCompany(data.idCompany)
    }

    if (banksCompany.length > 0) return banksCompany

    throw new Error('Não houve resultado nas buscas')
  }
}