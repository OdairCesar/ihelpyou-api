import { Request, Response } from "express";
import { ICreatePlatformBenefitRequestDTO } from "./CreatePlatformBenefitDTO";
import { CreatePlatformBenefitUseCase } from "./CreatePlatformBenefitUseCase";

export class CreatePlatformBenefitController {

  constructor(
    private createPlatformBenefitUseCase: CreatePlatformBenefitUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { id, name, description, amount, idPlan } = request.body

    if (!id || !description || !amount || !idPlan) {
      response.status(400).json({
        message: "Está faltando parametros"
      })
    }

    let dto: ICreatePlatformBenefitRequestDTO = { 
      id, 
      name, 
      amount, 
      idPlan
    }

    if (description && typeof description === 'string') dto.description = description

    try{
      this.createPlatformBenefitUseCase.execute(dto)

      response.status(201).send()
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}