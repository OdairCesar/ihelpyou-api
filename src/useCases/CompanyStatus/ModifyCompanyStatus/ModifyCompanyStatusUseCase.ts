import { ICompanyStatusRepository } from "../../../repositories/ICompanyStatusRepository";
import { IPlatformPlanRepository } from "../../../repositories/IPlatformPlanRepository";
import { IModifyCompanyStatusRequestDTO } from "./ModifyCompanyStatusDTO";

export class ModifyCompanyStatusUseCase {
  constructor(
    private companyStatusRepository: ICompanyStatusRepository,
    private platformPlanRepository: IPlatformPlanRepository
  ) { }

  async execute(data: IModifyCompanyStatusRequestDTO) {
    const line = await this.companyStatusRepository.findById(data.id)

    if (data.idPlan) {
      const platformPlan = await this.platformPlanRepository.findById(data.idPlan)

      if (platformPlan) {
        line.idPlan = data.idPlan
      } else {
        throw Error('Plano informato não existe')
      }
    }

    if (data.paid) line.paid = data.paid

    if (data.activated) line.activated = data.activated;
    
    if (data.dateAdmission) {
      if (!line.dateAdmission || data.dateAdmission > line.dateAdmission) {
        line.dateAdmission = data.dateAdmission;
      } else {
        throw Error('Data de admissão informata, não é valida')
      }
    }

    if (data.restriction) line.restriction = data.restriction;

    await this.companyStatusRepository.update(line);
  }
}