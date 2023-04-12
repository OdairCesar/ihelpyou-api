import { Request, Response } from "express";
import { IModifyCompanyStatusRequestDTO } from "./ModifyCompanyStatusDTO";
import { ModifyCompanyStatusUseCase } from "./ModifyCompanyStatusUseCase";

export class ModifyCompanyStatusController {

  constructor(
    private modifyCompanyStatusUseCase: ModifyCompanyStatusUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { paid, restriction, dateAdmission, activated, idPlan } = request.body
    const id = request.params.id
    let dto: IModifyCompanyStatusRequestDTO = { id }

    if (
      typeof paid !== "boolean" && 
      typeof restriction !== "boolean" && 
      typeof activated !== "boolean" && 
      !dateAdmission && 
      !idPlan
    ) {
      response.status(400).json({
        message: "Não foi informado qual a modificação"
      })
    }

    if (dateAdmission) {
      if (dateAdmission instanceof Date) {
        dto.dateAdmission = dateAdmission;
      } else {
        var dateArr = dateAdmission.split('/')
        dto.dateAdmission = new Date()
        dto.dateAdmission.setFullYear(dateArr[2])
        dto.dateAdmission.setMonth(dateArr[1] - 1)
        dto.dateAdmission.setDate(dateArr[0])
      }
    }
    
    if (typeof paid === 'boolean') dto.paid = paid;
    if (typeof restriction === 'boolean') dto.restriction = restriction;
    if (typeof activated === 'boolean') dto.activated = activated;
    if (idPlan && typeof idPlan === 'string') dto.idPlan = idPlan;
    
    try{
      await this.modifyCompanyStatusUseCase.execute(dto)

      response.status(201).send()
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}