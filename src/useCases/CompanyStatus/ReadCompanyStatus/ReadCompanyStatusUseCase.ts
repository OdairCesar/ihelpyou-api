import { ICompanyStatusRepository } from "../../../repositories/ICompanyStatusRepository";
import { CompanyStatus } from "../../../entities/CompanyStatus";
import { IReadCompanyStatusRequestDTO } from "./ReadCompanyStatusDTO";

export class ReadCompanyStatusUseCase {
  constructor (
    private companyStatusRepository: ICompanyStatusRepository,
  ) {}

  async execute(data: IReadCompanyStatusRequestDTO) {
    let companiesStatus: CompanyStatus[]

    if (data.id) {
      companiesStatus.push(await this.companyStatusRepository.findById(data.id))
    } else if (data.paid) {
      companiesStatus = await this.companyStatusRepository.findByPaid(data.paid)
    } else if (data.restriction) {
      companiesStatus = await this.companyStatusRepository.findByRestriction(data.restriction)
    } else if (data.activated) {
      companiesStatus = await this.companyStatusRepository.findByActivated(data.activated)
    } else if (data.dateAdmission) {
      companiesStatus = await this.companyStatusRepository.findByDateAdmission(data.dateAdmission)
    } else if (data.idPlan) {
      companiesStatus = await this.companyStatusRepository.findByIdPlan(data.idPlan)
    }

    if (companiesStatus) return companiesStatus

    throw new Error('Não houve resultado nas buscas')
  }
}