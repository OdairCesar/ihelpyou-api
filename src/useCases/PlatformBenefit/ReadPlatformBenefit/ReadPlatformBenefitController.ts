import { Request, Response } from "express";
import { ReadPlatformBenefitUseCase } from "./ReadPlatformBenefitUseCase";
import { IReadPlatformBenefitRequestDTO } from "./ReadPlatformBenefitDTO";

export class ReadPlatformBenefitController {
  constructor(private readPlatformBenefitUseCase: ReadPlatformBenefitUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, name, amount, idPlan } = request.query;

    if (!id && !name && !amount && !idPlan) {
      return response.status(400).json({
        message: "Não a parametros para a busca",
      });
    }

    let dto: IReadPlatformBenefitRequestDTO = {};

    if (id && typeof id === "string") dto.id = id;
    if (name && typeof name === "string") dto.name = name;
    if (amount && (typeof amount === "number" || typeof amount === 'string')) dto.amount = parseInt(amount);
    if (idPlan && typeof idPlan === "string") dto.idPlan = idPlan;

    try {
      const platformBenefits = await this.readPlatformBenefitUseCase.execute(dto);

      return response.status(201).json(platformBenefits);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
