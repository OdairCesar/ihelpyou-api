import { ICompanyRepository } from "../../../repositories/ICompanyRepository";
import { Company } from "../../../entities/Company";
import { IReadCompanyRequestDTO } from "./ReadCompanyDTO";

export class ReadCompanyUseCase {
  constructor (
    private companyRepository: ICompanyRepository,
  ) {}

  async execute(data: IReadCompanyRequestDTO) {
    let company: Company

    if (data.id) {
      company = await this.companyRepository.findById(data.id)
    } else if (data.idBaseRegistration) {
      company = await this.companyRepository.findByIdBaseRegistration(data.idBaseRegistration)
    } else if (data.idStatus) {
      company = await this.companyRepository.findByIdStatus(data.idStatus)
    }

    if (company) return company

    throw new Error('Não houve resultado nas buscas')
  }
}