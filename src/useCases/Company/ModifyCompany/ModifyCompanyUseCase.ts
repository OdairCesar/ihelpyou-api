import { ICompanyRepository } from "../../../repositories/ICompanyRepository";
import { ICompanyStatusRepository } from "../../../repositories/ICompanyStatusRepository";
import { IModifyCompanyRequestDTO } from "./ModifyCompanyDTO";
import { cnpj as cnpjValidator, cpf as cpfValidator } from 'cpf-cnpj-validator';

export class ModifyCompanyUseCase {
  constructor(
    private companyRepository: ICompanyRepository,
    private companyStatusRepository: ICompanyStatusRepository
  ) { }

  async execute(data: IModifyCompanyRequestDTO) {
    const line = await this.companyRepository.findById(data.id)

    if (!line) {
      throw Error('O usuario informato não existe')
    }

    if (data.mei) {
      if (!cnpjValidator.isValid(data.mei.toString())) {
        throw Error("MEI informato é invalido")
      }
      
      line.mei = data.mei;
    }
    
    if (data.cnpj) {
      if (!cnpjValidator.isValid(data.cnpj.toString())) {
        throw Error("CNPJ informato é invalido")
      }
      
      line.cnpj = data.cnpj;
    }

    if (data.cpf) {
      if (!cpfValidator.isValid(data.cpf.toString())) {
        throw Error("CPF informato é invalido")
      }

      line.cpf = data.cpf;
    }
    
    if (data.idStatus) {
      const companyStatus = this.companyStatusRepository.findById(data.idStatus)

      if (!companyStatus) {
        throw Error('Status informato não existe')
      }
      
      line.idStatus = data.idStatus;
    }

    if (data.name) line.name = data.name;
    if (data.description) line.description = data.description;


    await this.companyRepository.update(line);
  }
}