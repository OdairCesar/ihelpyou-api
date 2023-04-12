import { Request, Response } from "express";
import { ICreatePlatformPlanRequestDTO } from "./CreatePlatformPlanDTO";
import { CreatePlatformPlanUseCase } from "./CreatePlatformPlanUseCase";

export class CreatePlatformPlanController {

  constructor(
    private createPlatformPlanUseCase: CreatePlatformPlanUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { name, description, periodInMonth, limit, value } = request.body

    if (!name || !periodInMonth || !limit || !value ) {
      response.status(400).json({
        message: "Está faltando parametros"
      })
    }

    let dto: ICreatePlatformPlanRequestDTO = { 
      name,
      periodInMonth, 
      limit,
      value
    }

    if (description && typeof description === 'string') dto.description = description;

    try{
      await this.createPlatformPlanUseCase.execute(dto)

      response.status(201).send()
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}