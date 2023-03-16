import { Request, Response } from "express";
import { DeleteServiceUseCase } from "./DeleteServiceUseCase";

export class DeleteServiceController {
  constructor(
    private deleteServiceUseCase : DeleteServiceUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { id } = request.body

    if (!id || typeof id !== 'string') {
      response.status(400).json({
        message: 'Não ao pegar a analise' 
      })
    }

    try{
      await this.deleteServiceUseCase.execute({ id })

      response.status(201).send()
    } catch(err) {
      response.status(400).json({
        message: err.message || "Unexpected error.",
      })
    }
  }
}