import { Request, Response } from "express";
import { ReadPlatformPlanUseCase } from "./ReadPlatformPlanUseCase";
import { IReadPlatformPlanRequestDTO } from "./ReadPlatformPlanDTO";

export class ReadPlatformPlanController {
  constructor(private readPlatformPlanUseCase: ReadPlatformPlanUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, name, periodInMonth, value } = request.body;

    if (!id && !name && !periodInMonth && !value) {
      return response.status(400).json({
        message: "Não a parametros para a busca",
      });
    }

    let dto: IReadPlatformPlanRequestDTO = {};

    if (id && typeof id === 'string') dto.id = id; 
    if (name && typeof name === 'string') dto.name = name;
    if (periodInMonth && typeof periodInMonth === 'number') dto.periodInMonth = periodInMonth;
    if (value && typeof value === 'number') dto.value = value;

    try {
      const ordersEvaluations = await this.readPlatformPlanUseCase.execute(dto);

      return response.status(201).json(ordersEvaluations);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
