import { Request, Response } from "express";
import { IModifyBankCompanyRequestDTO } from "./ModifyBankCompanyDTO";
import { ModifyBankCompanyUseCase } from "./ModifyBankCompanyUseCase";

export class ModifyBankCompanyController {

  constructor(
    private modifyBankCompanyUseCase: ModifyBankCompanyUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { bank, pix } = request.body
    const id = request.params.id

    if (!bank && !pix) {
      response.status(400).json({
        message: "Não foi informado qual a modificação"
      })
    }

    let dto: IModifyBankCompanyRequestDTO = { id }

    if (pix) {
      dto.pix = pix
    }

    if (bank) {
      dto.bank = bank
    }

    try{
      this.modifyBankCompanyUseCase.execute(dto)

      response.status(201).send()
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}