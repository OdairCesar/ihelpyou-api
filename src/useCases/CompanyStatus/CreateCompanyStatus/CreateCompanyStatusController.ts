import { Request, Response } from "express";
import { ICreateCompanyStatusRequestDTO } from "./CreateCompanyStatusDTO";
import { CreateCompanyStatusUseCase } from "./CreateCompanyStatusUseCase";

export class CreateCompanyStatusController {

  constructor(
    private createCompanyStatusUseCase: CreateCompanyStatusUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { restriction, dateAdmission, activated, idPlan, idCompany } = request.body

    if (!idPlan || !idCompany) {
      response.status(400).json({
        message: "Para criar o Status da empresa é necessario saber qual o plano escolhido"
      })
    }

    let dto: ICreateCompanyStatusRequestDTO = { idPlan, idCompany }

    if (typeof restriction === "boolean") dto.restriction = restriction;
    if (typeof activated === "boolean") dto.activated = activated;

    if (dateAdmission) {
      if (dateAdmission instanceof Date) {
        dto.dateAdmission = dateAdmission;
      } else {
        var dateArr = dateAdmission.split('/')
        dto.dateAdmission = new Date(dateArr[2], dateArr[1], dateArr[0]);
      }
    }
    
    try{
      await this.createCompanyStatusUseCase.execute(dto)

      response.status(201).send()
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}