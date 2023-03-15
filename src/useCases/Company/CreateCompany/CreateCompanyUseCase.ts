import { Company } from "../../../entities/Company";
import { IBaseRegistrationRepository } from "../../../repositories/IBaseRegistrationRepository";
import { ICompanyRepository } from "../../../repositories/ICompanyRepository";
import { ICompanyStatusRepository } from "../../../repositories/ICompanyStatusRepository";
import { ICreateCompanyRequestDTO } from "./CreateCompanyDTO"

export class CreateCompanyUseCase {
  constructor(
    private companyRepository: ICompanyRepository,
    private baseRegistrationRepository: IBaseRegistrationRepository,
    private companyStatusRepository: ICompanyStatusRepository
  ) { }

  async execute(data: ICreateCompanyRequestDTO) {
    const baseRegistration = this.baseRegistrationRepository.findById(data.idBaseRegistration)
    const company = this.companyRepository.findById(data.id)

    if (data.idStatus) {
      const status = this.companyStatusRepository.findById(data.idStatus);

      if (!status) {
        throw Error('Status informato da empresa não existe');
      }
    }

    if (!baseRegistration) {
      throw Error('Não foi possivel encontrar o cadastro base para criar a empresa')
    }

    if (company) {
      throw Error('Empresa informada já existe')
    }


    const newCompany = new Company(data)

    this.companyRepository.insert(newCompany)
  }
}