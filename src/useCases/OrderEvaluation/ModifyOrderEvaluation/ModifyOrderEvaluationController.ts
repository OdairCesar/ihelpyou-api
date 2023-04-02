import { Request, Response } from "express";
import { IModifyOrderEvaluationRequestDTO } from "./ModifyOrderEvaluationDTO";
import { ModifyOrderEvaluationUseCase } from "./ModifyOrderEvaluationUseCase";

export class ModifyOrderEvaluationController {

  constructor(
    private modifyOrderEvaluationUseCase: ModifyOrderEvaluationUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { title, description, amountStars } = request.body
    const id = request.params.id

    if (!title && !description && amountStars) {
      response.status(400).json({
        message: "Não foi informado qual a modificação"
      })
    }

    let dto: IModifyOrderEvaluationRequestDTO = { id }

    if (title && typeof title === 'string') dto.title = title;
    if (description && typeof description === 'string') dto.description = description
    if (amountStars && typeof amountStars === 'number') dto.amountStars = amountStars

    try{
      this.modifyOrderEvaluationUseCase.execute(dto)

      response.status(201).send()
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}