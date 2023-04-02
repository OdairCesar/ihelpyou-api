import { Request, Response } from "express";
import { ICreateOrderEvaluationRequestDTO } from "./CreateOrderEvaluationDTO";
import { CreateOrderEvaluationUseCase } from "./CreateOrderEvaluationUseCase";

export class CreateOrderEvaluationController {

  constructor(
    private createOrderEvaluationUseCase: CreateOrderEvaluationUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { title, description, date, amountStars, idUser, idOrder, idService } = request.body

    if (!amountStars || !idUser || !idOrder || !idService ) {
      response.status(400).json({
        message: "Está faltando parametros"
      })
    }
    
    let setDate = new Date()

    if (date) {
      if (date instanceof Date) {
        setDate = date;
      } else {
        setDate = new Date(date);
      }
    }

    let dto: ICreateOrderEvaluationRequestDTO = { 
      amountStars,
      date: setDate, 
      idUser, 
      idOrder, 
      idService 
    }

    if (title && typeof title === 'string') dto.title = title;
    if (description && typeof description === 'string') dto.description = description;

    try{
      this.createOrderEvaluationUseCase.execute(dto)

      response.status(201).send()
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}