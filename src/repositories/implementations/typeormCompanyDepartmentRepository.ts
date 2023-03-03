import { CompanyDepartment } from "../entities/CompanyDepartment"

export interface ICompanyDepartmentRepository {
  findById(id: string): Promise<CompanyDepartment>
  findByIdCompany(idCompany: string): Promise<Array<CompanyDepartment>>
  findByIdDepartment(idDepartment: string): Promise<Array<CompanyDepartment>>
  insert(companyDepartment: CompanyDepartment): Promise<void>
  update(companyDepartment: CompanyDepartment): Promise<void>
}