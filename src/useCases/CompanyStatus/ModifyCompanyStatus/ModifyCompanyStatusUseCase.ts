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
        throw new Error('Plano informato não existe')
      }
    }

    if (typeof data.paid === "boolean") line.paid = data.paid;
    if (typeof data.activated === "boolean") line.activated = data.activated;
    if (typeof data.restriction === "boolean") line.restriction = data.restriction;
    
    if (data.dateAdmission) {
      var dataInJS = new Date(line.dateAdmission)

      if (!line.dateAdmission || data.dateAdmission > dataInJS) line.dateAdmission = data.dateAdmission;
      else throw new Error('Data de admissão informata, não é valida');
    }

    await this.companyStatusRepository.update(line);
  }
}