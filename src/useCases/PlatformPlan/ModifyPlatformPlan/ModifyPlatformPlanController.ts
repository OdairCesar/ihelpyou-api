import { Request, Response } from "express";
import { IModifyPlatformPlanRequestDTO } from "./ModifyPlatformPlanDTO";
import { ModifyPlatformPlanUseCase } from "./ModifyPlatformPlanUseCase";

export class ModifyPlatformPlanController {

  constructor(
    private modifyPlatformPlanUseCase: ModifyPlatformPlanUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { name, description, periodInMonth, limit, value } = request.body
    const id = request.params.id

    if (!name && !description && !periodInMonth && !limit && !value) {
      response.status(400).json({
        message: "Não foi informado qual a modificação"
      })
    }

    let dto: IModifyPlatformPlanRequestDTO = { id }

    if (name && typeof name === 'string') dto.name = name;
    if (description && typeof description === 'string') dto.description = description
    if (periodInMonth && typeof periodInMonth === 'number') dto.periodInMonth = periodInMonth
    if (limit && typeof limit === 'string') dto.limit = limit
    if (value && typeof value === 'number') dto.value = value

    try{
      this.modifyPlatformPlanUseCase.execute(dto)

      response.status(201).send()
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}