import { Request, Response } from "express";
import { IModifyCompanyStatusRequestDTO } from "./ModifyCompanyStatusDTO";
import { ModifyCompanyStatusUseCase } from "./ModifyCompanyStatusUseCase";

export class ModifyCompanyStatusController {

  constructor(
    private modifyCompanyStatusUseCase: ModifyCompanyStatusUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { restriction, dateAdmission, activated, idPlan } = request.body
    const id = request.params.id
    let dto: IModifyCompanyStatusRequestDTO = { id }

    if (!restriction && !dateAdmission && !activated && !idPlan) {
      response.status(400).json({
        message: "Não foi informado qual a modificação"
      })
    }

    if (dateAdmission) {
      if (dateAdmission instanceof Date) {
        dto.dateAdmission = dateAdmission;
      } else {
        dto.dateAdmission = new Date(dateAdmission);
      }
    }
    
    if (restriction && typeof restriction === 'boolean') dto.restriction = restriction;
    if (activated && typeof activated === 'boolean') dto.activated = activated;
    if (idPlan && typeof idPlan === 'string') dto.idPlan = idPlan;
    
    try{
      this.modifyCompanyStatusUseCase.execute(dto)

      response.status(201).send()
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}