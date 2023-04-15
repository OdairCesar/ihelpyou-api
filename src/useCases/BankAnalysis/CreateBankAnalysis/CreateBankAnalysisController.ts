import { Request, Response } from "express";
import { CreateBankAnalysisUseCase } from "./CreateBankAnalysisUseCase";
import { ICreateBankAnalysisRequestDTO } from "./CreateBankAnalysisDTO";

export class CreateBankAnalysisController {
  constructor(private createBankAnalysisUseCase: CreateBankAnalysisUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { idBank } = request.body;

    if (!idBank) {
      return response.status(400).json({
        message: "Não foi informado qual o banco que pertencerá essa analise",
      });
    }

    let dto: ICreateBankAnalysisRequestDTO = { idBank }

    try {
      await this.createBankAnalysisUseCase.execute(dto);

      return response.status(201).json();
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}