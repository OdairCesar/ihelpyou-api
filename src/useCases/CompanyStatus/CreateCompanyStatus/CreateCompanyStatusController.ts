import { Request, Response } from "express";
import { ICreateCompanyStatusRequestDTO } from "./CreateCompanyStatusDTO";
import { CreateCompanyStatusUseCase } from "./CreateCompanyStatusUseCase";

export class CreateCompanyStatusController {

  constructor(
    private createCompanyStatusUseCase: CreateCompanyStatusUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { paid, restriction, dateAdmission, activated, idPlan } = request.body

    if (!paid || !restriction || !dateAdmission || !activated || !idPlan) {
      response.status(400).json({
        message: "Para criar o Status da empre via request é necessario todas as informações"
      })
    }

    let dto: ICreateCompanyStatusRequestDTO = { 
      paid, 
      restriction, 
      dateAdmission, 
      activated, 
      idPlan
    }

    try{
      this.createCompanyStatusUseCase.execute(dto)

      response.status(201).send()
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}