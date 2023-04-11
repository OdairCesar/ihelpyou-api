import { Company } from "../../../entities/Company";
import { IBaseRegistrationRepository } from "../../../repositories/IBaseRegistrationRepository";
import { ICompanyRepository } from "../../../repositories/ICompanyRepository";
import { ICompanyStatusRepository } from "../../../repositories/ICompanyStatusRepository";
import { ICreateCompanyRequestDTO } from "./CreateCompanyDTO";
import { cnpj as cnpjValidator, cpf as cpfValidator } from 'cpf-cnpj-validator';

export class CreateCompanyUseCase {
  constructor(
    private companyRepository: ICompanyRepository,
    private baseRegistrationRepository: IBaseRegistrationRepository,
    private companyStatusRepository: ICompanyStatusRepository,
  ) { }

  async execute(data: ICreateCompanyRequestDTO) {
    const baseRegistration = await this.baseRegistrationRepository.findById(data.idBaseRegistration)
    const company = await this.companyRepository.findByIdBaseRegistration(data.idBaseRegistration)

    if (!baseRegistration) {
      throw Error('Não foi possivel encontrar o cadastro base para criar a empresa')
    }

    if (company) {
      throw new Error('Essa base de registro, já esta sendo utilizada em outra empresa')
    }

    if (data.cpf){
      const searchCPF = await this.companyRepository.findByCPF(data.cpf)

      if (searchCPF) throw new Error('Documento informato já foi utilizado em outra empresa');
      if (!cpfValidator.isValid(data.cpf.toString())) throw new Error("Documento informato é invalido");
    }

    if (data.cnpj) {
      const searchCNPJ = await this.companyRepository.findByCNPJ(data.cnpj)

      if (searchCNPJ) throw new Error('Documento informato já foi utilizado em outra empresa');
      if (!cnpjValidator.isValid(data.cnpj.toString())) throw new Error("Documento informato é invalido");
    }

    if (data.mei) {
      const searchMEI = await this.companyRepository.findByMEI(data.mei)

      if (searchMEI) throw new Error('Documento informato já foi utilizado em outra empresa');
      if (!cnpjValidator.isValid(data.mei.toString())) throw new Error("Documento informato é invalido");
    }

    if (data.idStatus) {
      const status = await this.companyStatusRepository.findById(data.idStatus);

      if (!status) {
        throw Error('Status informato da empresa não existe');
      }
    }

    const newCompany = new Company(data)

    await this.companyRepository.insert(newCompany)
  }
}