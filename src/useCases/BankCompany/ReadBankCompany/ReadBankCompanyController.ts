import { Request, Response } from "express";
import { ReadBankCompanyUseCase } from "./ReadBankCompanyUseCase";
import { IReadBankCompanyRequestDTO } from "./ReadBankCompanyDTO";

export class ReadBankCompanyController {
  constructor(private readBankCompanyUseCase: ReadBankCompanyUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, bank, pix, idCompany } = request.body;

    if (!id || !bank || !pix || !idCompany) {
      return response.status(400).json({
        message: "Não a parametros para a busca",
      });
    }

    let dto: IReadBankCompanyRequestDTO = {};

    if (id) {
      dto.id = id;
    }
    if (bank) {
      dto.bank = bank;
    }
    if (pix) {
      dto.pix = pix;
    }
    if (idCompany) {
      dto.idCompany = idCompany;
    }

    try {
      const banks = await this.readBankCompanyUseCase.execute(dto);

      return response.status(201).json(banks);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
