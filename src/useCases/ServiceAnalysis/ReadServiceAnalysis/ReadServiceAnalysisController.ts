import { Request, Response } from "express";
import { ReadServiceAnalysisUseCase } from "./ReadServiceAnalysisUseCase";
import { IReadServiceAnalysisRequestDTO } from "./ReadServiceAnalysisDTO";

export class ReadServiceAnalysisController {
  constructor(private readServiceAnalysisUseCase: ReadServiceAnalysisUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, idService } = request.query;

    if (!id && !idService) {
      return response.status(400).json({
        message: "Não a parametros para a busca",
      });
    }

    let dto: IReadServiceAnalysisRequestDTO = {};

    if (id && typeof id === 'string') dto.id = id; 
    if (idService && typeof idService === 'string') dto.idService = idService;

    try {
      const serviceAnalisys = await this.readServiceAnalysisUseCase.execute(dto);

      return response.status(201).json(serviceAnalisys);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
