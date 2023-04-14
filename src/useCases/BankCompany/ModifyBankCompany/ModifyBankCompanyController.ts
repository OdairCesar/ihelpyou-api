import { Request, Response } from "express";
import { IModifyBankCompanyRequestDTO } from "./ModifyBankCompanyDTO";
import { ModifyBankCompanyUseCase } from "./ModifyBankCompanyUseCase";

export class ModifyBankCompanyController {

  constructor(
    private modifyBankCompanyUseCase: ModifyBankCompanyUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { bankHolder, pix } = request.body
    const id = request.params.id

    if (!bankHolder && !pix) {
      response.status(400).json({
        message: "Não foi informado qual a modificação"
      })
    }

    let dto: IModifyBankCompanyRequestDTO = { id }

    if (pix && typeof pix === "string") dto.pix = pix;
    if (bankHolder && typeof bankHolder === "string") dto.bankHolder = bankHolder;

    try{
      await this.modifyBankCompanyUseCase.execute(dto)

      response.status(201).send()
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}