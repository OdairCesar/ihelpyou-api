import { Request, Response } from "express";
import { ReadOrderEvaluationUseCase } from "./ReadOrderEvaluationUseCase";
import { IReadOrderEvaluationRequestDTO } from "./ReadOrderEvaluationDTO";

export class ReadOrderEvaluationController {
  constructor(private readOrderEvaluationUseCase: ReadOrderEvaluationUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, date, amountStars, idUser, idOrder, idService } = request.query;

    if (!id && !date && !amountStars && !idService && !idOrder && !idUser) {
      return response.status(400).json({
        message: "Não a parametros para a busca",
      });
    }

    let dto: IReadOrderEvaluationRequestDTO = {};

    if (id && typeof id === 'string') dto.id = id; 
    if (amountStars && (typeof amountStars === 'number' || typeof amountStars === 'string')) dto.amountStars = parseFloat(amountStars);
    if (idUser && typeof idUser === 'string') dto.idUser = idUser;
    if (idOrder && typeof idOrder === 'string') dto.idOrder = idOrder;
    if (idService && typeof idService === 'string') dto.idService = idService;
    
    if (date) {
      if (date instanceof Date) {
        dto.date = date;
      } else if (typeof date === 'string'){
        dto.date= new Date(date);
      }
    }

    try {
      const ordersEvaluations = await this.readOrderEvaluationUseCase.execute(dto);

      return response.status(201).json(ordersEvaluations);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
