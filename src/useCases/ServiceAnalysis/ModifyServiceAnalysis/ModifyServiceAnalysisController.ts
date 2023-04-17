import { Request, Response } from "express";
import { IModifyServiceAnalysisRequestDTO } from "./ModifyServiceAnalysisDTO";
import { ModifyServiceAnalysisUseCase } from "./ModifyServiceAnalysisUseCase";

export class ModifyServiceAnalysisController {

  constructor(
    private modifyServiceAnalysisUseCase: ModifyServiceAnalysisUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { amountAvgDay, amountAvgWeek, amountAvgMonth, timeMdPerUser, views, purchaseCancelled } = request.body
    const id = request.params.id

    if (!amountAvgDay && !amountAvgWeek && !amountAvgMonth && !timeMdPerUser && !views && !purchaseCancelled) {
      response.status(400).json({
        message: "Não foi informado qual a modificação"
      })
    }

    let dto: IModifyServiceAnalysisRequestDTO = { id }

    if (amountAvgDay && typeof amountAvgDay === 'number') dto.amountAvgDay = amountAvgDay;
    if (amountAvgWeek && typeof amountAvgWeek === 'number') dto.amountAvgWeek = amountAvgWeek
    if (amountAvgMonth && typeof amountAvgMonth === 'number') dto.amountAvgMonth = amountAvgMonth
    if (timeMdPerUser && typeof timeMdPerUser === 'string') dto.timeMdPerUser = timeMdPerUser
    if (views && typeof views === 'number') dto.views = views
    if (purchaseCancelled && typeof purchaseCancelled === 'number') dto.purchaseCancelled = purchaseCancelled

    try{
      await this.modifyServiceAnalysisUseCase.execute(dto)

      response.status(201).send()
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}