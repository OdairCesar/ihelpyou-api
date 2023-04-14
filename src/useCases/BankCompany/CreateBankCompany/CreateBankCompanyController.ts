import { Request, Response } from "express";
import { ICreateBankCompanyRequestDTO } from "./CreateBankCompanyDTO";
import { CreateBankCompanyUseCase } from "./CreateBankCompanyUseCase";

export class CreateBankCompanyController {

  constructor(
    private createBankCompanyUseCase: CreateBankCompanyUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { bank, bankHolder, cpf, cnpj, agency, account, pix, idCompany } = request.body

    if (!bank || !bankHolder || !agency || !account || !idCompany) {
      response.status(400).json({
        message: "Está faltando parametros"
      })
    }

    if (!cpf && !cnpj) {
      response.status(400).json({
        message: "Está faltando cpf ou cnpj do dono da conta"
      })
    }

    if ( typeof bank !== "number" || typeof bankHolder !== "string" || typeof cpf !== "number" || typeof cnpj !== "number" || typeof agency !== "number" || typeof account !== "number" || typeof idCompany !== "string") {
      response.status(400).json({
        message: "Paremetro informato esta no formato errado"
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

    if (pix && typeof pix === 'string') dto.pix = pix;

    try{
      await this.createBankCompanyUseCase.execute(dto)

      response.status(201).send()
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}