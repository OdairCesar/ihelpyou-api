import { CompanyService } from "../entities/CompanyService"

export interface ICompanyServiceRepository {
  findById(id: string): Promise<CompanyService>
  findByName(name: string): Promise<Array<CompanyService>>
  findByMinimumTime(minimumTime: string): Promise<Array<CompanyService>>
  findByMaximumTime(maximumTime: string): Promise<Array<CompanyService>>
  findByValue(value: string): Promise<Array<CompanyService>>
  findByIdServiceAnalysis(idServiceAnalysis: string): Promise<CompanyService>
  findByIdDepartment(idDepartment: string): Promise<Array<CompanyService>>
  findByIdCompany(idCompany: string): Promise<Array<CompanyService>>
  insert(companyService: CompanyService): Promise<void>
  update(companyService: CompanyService): Promise<void>
}