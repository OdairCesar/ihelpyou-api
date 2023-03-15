import { Request, Response } from "express";
import { ReadCompanyUseCase } from "./ReadCompanyUseCase";
import { IReadCompanyRequestDTO } from "./ReadCompanyDTO";

export class ReadCompanyController {
  constructor(private readCompanyUseCase: ReadCompanyUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, idBaseRegistration, idStatus } = request.body;

    if (!id && !idBaseRegistration && !idStatus) {
      return response.status(400).json({
        message: "Não a parametros para a busca",
      });
    }

    let dto: IReadCompanyRequestDTO = {};

    if (id && typeof id === 'string') dto.id = id;
    if (idBaseRegistration && typeof idBaseRegistration === 'string') dto.idBaseRegistration = idBaseRegistration;
    if (idStatus && typeof idStatus === 'string') dto.idStatus = idStatus;

    try {
      const company = await this.readCompanyUseCase.execute(dto);

      return response.status(201).json(company);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}