import { Request, Response } from "express";
import { ICreateServiceAnalysisRequestDTO } from "./CreateServiceAnalysisDTO";
import { CreateServiceAnalysisUseCase } from "./CreateServiceAnalysisUseCase";

export class CreateServiceAnalysisController {

  constructor(
    private createServiceAnalysisUseCase: CreateServiceAnalysisUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { amountAvgDay, amountAvgWeek, amountAvgMonth, timeMdPerUser, views, purchaseCancelled, idService } = request.body

    if (!idService) {
      response.status(400).json({
        message: "Está faltando parametros"
      })
    }

    const dateAnalysis = new Date()

    let dto: ICreateServiceAnalysisRequestDTO = { 
      date: dateAnalysis,
      idService
    }

    if (amountAvgDay && typeof amountAvgDay === "number") dto.amountAvgDay = amountAvgDay;
    if (amountAvgWeek && typeof amountAvgWeek === "number") dto.amountAvgWeek = amountAvgWeek;
    if (amountAvgMonth && typeof amountAvgMonth === "number") dto.amountAvgMonth = amountAvgMonth;
    if (timeMdPerUser && typeof timeMdPerUser === "string") dto.timeMdPerUser = timeMdPerUser; 
    if (views && typeof views === "number") dto.views = views;
    if (purchaseCancelled && typeof purchaseCancelled === "number") dto.purchaseCancelled = purchaseCancelled;

    try{
      await this.createServiceAnalysisUseCase.execute(dto)

      response.status(201).send()
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}