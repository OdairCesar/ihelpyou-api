import { IBankCompanyRepository } from "../../../repositories/IBankCompanyRepository";

export class DeleteBankCompanyUseCase {
  constructor (
    private bankCompanyRepository: IBankCompanyRepository
  ) { }

  async execute(data: IBankCompanyRequestDTO) {
    const bankCompany = await this.bankCompanyRepository.findById(data.id)

    if (!bankCompany){
      throw Error('Não foi possivel deletar essa analise')
    }

    await this.bankCompanyRepository.delete(bankCompany)
  }
}