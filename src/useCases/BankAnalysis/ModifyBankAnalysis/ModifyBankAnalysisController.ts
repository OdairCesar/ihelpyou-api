import { Request, Response } from "express";
import { ModifyBankAnalysisUseCase } from "./ModifyBankAnalysisUseCase";
import { IModifyBankAnalysisRequestDTO } from "./ModifyBankAnalysisDTO";

export class ModifyBankAnalysisController {
  constructor (
    private modifyBankAnalysisUseCase: ModifyBankAnalysisUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { maxinum, mininum, avgDay, avgWeek, avgService } = request.body;
    const id = request.params.id;

    if (!maxinum && !mininum && !avgDay && !avgWeek && !avgService) {
      return response.status(400).json({
        message: "Nenhum campo encontrado",
      });
    }

    let dto: IModifyBankAnalysisRequestDTO = { id };

    if (maxinum && typeof maxinum === 'number') dto.maxinum = maxinum;
    if (mininum && typeof mininum === 'number') dto.mininum = mininum;
    if (avgDay && typeof avgDay === 'number') dto.avgDay = avgDay;
    if (avgWeek && typeof avgWeek === 'number') dto.avgWeek = avgWeek;
    if (avgService && typeof avgService === 'number') dto.avgService = avgService;

    try {
      await this.modifyBankAnalysisUseCase.execute(dto);

      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
