import { ICompanyRepository } from "../../../repositories/ICompanyRepository";
import { ICompanyStatusRepository } from "../../../repositories/ICompanyStatusRepository";
import { IModifyCompanyRequestDTO } from "./ModifyCompanyDTO"

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

    if (data.name) line.name = data.name;
    if (data.description) line.description = data.description;
    if (data.mei) line.mei = data.mei;
    if (data.cnpj) line.cnpj = data.cnpj;
    if (data.cpf) line.cpf = data.cpf;

    if (data.idStatus) {
      const companyStatus = this.companyStatusRepository.findById(data.idStatus)

      if (!companyStatus) {
        throw Error('Status informato não existe')
      }
      
      line.idStatus = data.idStatus;
    }

    await this.companyRepository.update(line);
  }
}