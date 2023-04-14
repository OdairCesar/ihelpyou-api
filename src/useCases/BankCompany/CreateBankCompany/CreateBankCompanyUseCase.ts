import { BankCompany } from "../../../entities/BankCompany";
import { IBankCompanyRepository } from "../../../repositories/IBankCompanyRepository";
import { ICompanyRepository } from "../../../repositories/ICompanyRepository";
import { ICreateBankCompanyRequestDTO } from "./CreateBankCompanyDTO"
import { cnpj as cnpjValidator, cpf as cpfValidator } from 'cpf-cnpj-validator';

export class CreateBankCompanyUseCase {
  constructor(
    private bankCompanyRepository: IBankCompanyRepository,
    private companyRepository: ICompanyRepository
  ) { }

  async execute(data: ICreateBankCompanyRequestDTO) {
    const company = await this.companyRepository.findById(data.idCompany)

    if (!company) throw new Error('Empresa informata não existe');

    if (data.cpf) {
      if (!cpfValidator.isValid(data.cpf.toString())) throw new Error("Documento informato é invalido");
    }

    if (data.cnpj) {
      if (!cnpjValidator.isValid(data.cnpj.toString())) throw new Error("Documento informato é invalido");
    }

    if (![1, 104, 237, 341, 356].includes(data.bank)){ 
      //Validar numero do bank 
      throw new Error('Banco não é reconhecido pelo SFN')
    }

    let country = data.agency.toString().substring(0, 2)
    if(!['65', '78', '25', '36'].includes(country)) { 
      //Validar estado do pais do bank
      throw new Error('Agencia informada não pertence ao Brasil')
    }

    let agency = data.agency.toString().substring(2, 4)
    if (!['58', '98', '65', '23', '74'].includes(agency)) {
      //Validar agencia 
      throw new Error('Agencia informada não possui registro no banco informado')
    }

    const bank = new BankCompany(data)

    await this.bankCompanyRepository.insert(bank)
  }
}