import { Request, Response } from "express";
import { ReadBankCompanyUseCase } from "./ReadBankCompanyUseCase";
import { IReadBankCompanyRequestDTO } from "./ReadBankCompanyDTO";

export class ReadBankCompanyController {
  constructor(private readBankCompanyUseCase: ReadBankCompanyUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, bank, pix, idCompany } = request.query;

    if (!id && !bank && !pix && !idCompany) {
      return response.status(400).json({
        message: "Não a parametros para a busca",
      });
    }

    let dto: IReadBankCompanyRequestDTO = {};

    if (id && typeof id === "string") dto.id = id;
    if (bank && (typeof bank === "number" || typeof bank === "string")) dto.bank = parseFloat(bank);
    if (pix && typeof pix === "string") dto.pix = pix;
    if (idCompany && typeof idCompany === "string") dto.idCompany = idCompany;

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
