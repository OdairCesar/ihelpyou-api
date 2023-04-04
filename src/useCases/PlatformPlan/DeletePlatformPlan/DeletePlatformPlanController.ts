import { Request, Response } from "express";
import { DeletePlatformPlanUseCase } from "./DeletePlatformPlanUseCase";

export class DeletePlatformPlanController {
  constructor(
    private deletePlatformPlanUseCase : DeletePlatformPlanUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { id } = request.body

    if (!id || typeof id !== 'string') {
      response.status(400).json({
        message: 'Não foi possivel achar Plano da Plataforma' 
      })
    }

    try{
      await this.deletePlatformPlanUseCase.execute({ id })

      response.status(201).send()
    } catch(err) {
      response.status(400).json({
        message: err.message || "Unexpected error.",
      })
    }
  }
}