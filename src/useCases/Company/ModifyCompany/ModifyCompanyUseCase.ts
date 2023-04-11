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
      throw new Error('O usuario informato não existe')
    }

    if (data.mei && data.mei != line.mei) {
      const searchMEI = await this.companyRepository.findByMEI(data.mei)

      if (searchMEI) throw new Error('MEI Documento informato já foi utilizado em outra empresa');
      if (!cnpjValidator.isValid(data.mei.toString())) throw new Error("MEI informato é invalido");
      
      line.mei = data.mei;
    }
    
    if (data.cnpj && data.cnpj != line.cnpj) {
      const searchCNPJ = await this.companyRepository.findByCNPJ(data.cnpj)

      if (searchCNPJ) throw new Error('cnpj Documento informato já foi utilizado em outra empresa');
      if (!cnpjValidator.isValid(data.cnpj.toString())) throw new Error("CNPJ informato é invalido");
      
      line.cnpj = data.cnpj;
    }

    if (data.cpf && data.cpf != line.cpf) {
      const searchCPF = await this.companyRepository.findByCPF(data.cpf)

      if (searchCPF.length > 0) throw new Error('cpf Documento informato já foi utilizado em outra empresa');
      if (!cpfValidator.isValid(data.cpf.toString())) throw new Error("CPF informato é invalido");

      line.cpf = data.cpf;
    }
    
    if (data.idStatus) {
      const companyStatus = await this.companyStatusRepository.findById(data.idStatus)

      if (!companyStatus) {
        throw new Error('Status informato não existe')
      }
      
      line.idStatus = data.idStatus;
    }

    if (data.name) line.name = data.name;
    if (data.description) line.description = data.description;


    await this.companyRepository.update(line);
  }
}