import { Request, Response } from "express";
import { ReadUserCardUseCase } from "./ReadUserCardUseCase";
import { IReadUserCardRequestDTO } from "./ReadUserCardDTO";

export class ReadUserCardController {
  constructor(private readUserCardUseCase: ReadUserCardUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, idUser } = request.query;

    if (!id && !idUser) {
      return response.status(400).json({
        message: "Não a parametros para a busca",
      });
    }

    let dto: IReadUserCardRequestDTO = {};

    if (id && typeof id === 'string') dto.id = id; 
    if (idUser && typeof idUser === 'string') dto.idUser = idUser;

    try {
      const ordersEvaluations = await this.readUserCardUseCase.execute(dto);

      return response.status(201).json(ordersEvaluations);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
