import { Request, Response } from "express";
import { ICreateBankCompanyRequestDTO } from "./CreateBankCompanyDTO";
import { CreateBankCompanyUseCase } from "./CreateBankCompanyUseCase";

export class CreateBankCompanyController {

  constructor(
    private createBankCompanyUseCase: CreateBankCompanyUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { bank, bankHolder, cpf, cnpj, agency, account, pix, idCompany } = request.body

    if (!bank || !bankHolder || !cpf || !cnpj || !agency || !account || !idCompany) {
      response.status(400).json({
        message: "Está faltando parametros"
      })
    }

    let dto: ICreateBankCompanyRequestDTO = { 
      bank,
      bankHolder, 
      cpf,
      cnpj, 
      agency, 
      account,
      idCompany
    }

    if (pix) {
      dto.pix = pix
    }

    try{
      this.createBankCompanyUseCase.execute(dto)

      response.status(201).send()
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}