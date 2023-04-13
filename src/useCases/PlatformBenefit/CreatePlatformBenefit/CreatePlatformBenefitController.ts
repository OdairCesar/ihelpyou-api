import { Request, Response } from "express";
import { ICreatePlatformBenefitRequestDTO } from "./CreatePlatformBenefitDTO";
import { CreatePlatformBenefitUseCase } from "./CreatePlatformBenefitUseCase";

export class CreatePlatformBenefitController {

  constructor(
    private createPlatformBenefitUseCase: CreatePlatformBenefitUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { name, description, amount, idPlan } = request.body

    if (!name || !amount || !idPlan) {
      response.status(400).json({
        message: "Está faltando parametros"
      })
    }

    let dto: ICreatePlatformBenefitRequestDTO = { 
      name, 
      amount, 
      idPlan
    }

    if (description && typeof description === 'string') dto.description = description

    try{
      await this.createPlatformBenefitUseCase.execute(dto)

      response.status(201).send()
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}