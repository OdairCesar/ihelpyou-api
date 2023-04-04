import { Request, Response } from "express";
import { ICreateServiceAnalysisRequestDTO } from "./CreateServiceAnalysisDTO";
import { CreateServiceAnalysisUseCase } from "./CreateServiceAnalysisUseCase";

export class CreateServiceAnalysisController {

  constructor(
    private createServiceAnalysisUseCase: CreateServiceAnalysisUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { id, amountAvgDay, amountAvgWeek, amountAvgMonth, timeMdPerUser, views, purchaseCancelled, idService } = request.body

    if (!id || !amountAvgDay || !amountAvgWeek || !amountAvgMonth || !timeMdPerUser || !views || !purchaseCancelled || !idService) {
      response.status(400).json({
        message: "Está faltando parametros"
      })
    }

    let dto: ICreateServiceAnalysisRequestDTO = { 
      id,
      amountAvgDay,
      amountAvgWeek,
      amountAvgMonth,
      timeMdPerUser, 
      views,
      purchaseCancelled,
      idService
    }

    try{
      this.createServiceAnalysisUseCase.execute(dto)

      response.status(201).send()
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}