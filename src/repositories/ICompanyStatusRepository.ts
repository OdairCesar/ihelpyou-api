import { CompanyStatus } from "../entities/CompanyStatus"

export interface ICompanyStatusRepository {
  findById(id: string): Promise<CompanyStatus>
  findByPaid(paid: boolean): Promise<Array<CompanyStatus>>
  findByRestriction(restriction: boolean): Promise<Array<CompanyStatus>>
  findByDateAdmission(admission: Date): Promise<Array<CompanyStatus>>
  findByActivated(activated: boolean): Promise<Array<CompanyStatus>>
  findByIdPlan(idPlan: string): Promise<Array<CompanyStatus>>
  insert(companyStatus: CompanyStatus): Promise<void>
  update(companyStatus: CompanyStatus): Promise<void>
}