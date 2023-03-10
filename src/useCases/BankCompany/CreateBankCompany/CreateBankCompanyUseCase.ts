import { BankCompany } from "../../../entities/BankCompany";
import { IBankCompanyRepository } from "../../../repositories/IBankCompanyRepository";
import { ICreateBankCompanyRequestDTO } from "./CreateBankCompanyDTO"

export class CreateBankCompanyUseCase {
  constructor(
    private bankCompanyRepository: IBankCompanyRepository
  ) { }

  async execute(data: ICreateBankCompanyRequestDTO) {
    if (![1, 104, 237, 341, 356].includes(data.bank)){ //Validar numero do bank 
      throw Error('Banco não é reconhecido pelo SFN')
    }

    let country = data.agency.toString().substring(0, 2)
    if(!['65'].includes(country)) { //Validar estado do pais do bank
      throw Error('Agencia informada não pertence ao Brasil')
    }

    let agency = data.agency.toString().substring(2, 2)
    if (!['58', '98', '65', '23', '74'].includes(agency)) { //Validar agencia 
      throw Error('Agencia informada não possui registro no banco informado')
    }

    const bank = new BankCompany(data)

    this.bankCompanyRepository.insert(bank)
  }
}