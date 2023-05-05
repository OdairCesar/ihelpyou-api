import { Request, Response } from "express";
import { ReadBankAnalysisUseCase } from "./ReadBankAnalysisUseCase";
import { IReadBankAnalysisRequestDTO } from "./ReadBankAnalysisDTO";

export class ReadBankAnalysisController {
  constructor(private readBankAnalysisUseCase: ReadBankAnalysisUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, maxinum, mininum, idBank } = request.query;

    if (!id && !maxinum && !mininum && !idBank) {
      return response.status(400).json({
        message: "Não há parametros para a busca",
      });
    }

    let dto: IReadBankAnalysisRequestDTO = {};

    if (id && typeof id === 'string') dto.id = id;
    if (maxinum && (typeof maxinum === 'number' || typeof maxinum === 'string')) dto.maxinum = parseFloat(maxinum);
    if (mininum && (typeof mininum === 'number' || typeof mininum === 'string')) dto.mininum = parseFloat(mininum);
    if (idBank && typeof idBank === 'string') dto.idBank = idBank;

    try {
      const analyzes = await this.readBankAnalysisUseCase.execute(dto);

      return response.status(201).json(analyzes);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
