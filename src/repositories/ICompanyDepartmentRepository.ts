import { CompanyDepartment } from "../entities/CompanyDepartment"

export interface ICompanyDepartmentRepository {
  findByIdCompany(idCompany: string): Promise<Array<CompanyDepartment>>
  findByIdDepartment(idDepartment: string): Promise<Array<CompanyDepartment>>
}