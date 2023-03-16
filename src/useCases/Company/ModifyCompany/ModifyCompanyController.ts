import { Request, Response } from "express";
import { IModifyCompanyRequestDTO } from "./ModifyCompanyDTO";
import { ModifyCompanyUseCase } from "./ModifyCompanyUseCase";

export class ModifyCompanyController {

  constructor(
    private modifyCompanyUseCase: ModifyCompanyUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { name, description, cnpj, cpf, mei, idStatus } = request.body
    const id = request.params.id
    let dto: IModifyCompanyRequestDTO = { id }

    if (!name && !description && !idStatus && !cnpj && !cpf && !mei) {
      response.status(400).json({
        message: "Não foi informado qual a modificação"
      })
    }

    if (id && typeof id === 'string') dto.id = id;
    if (name && typeof name === 'string') dto.name = name;
    if (description && typeof description === 'string') dto.description = description;
    if (mei && typeof mei === 'number') dto.mei = mei;
    if (cnpj && typeof cnpj === 'number') dto.cnpj = cnpj;
    if (cpf && typeof cpf === 'number') dto.cpf = cpf;
    if (idStatus && typeof idStatus === 'string') dto.idStatus = idStatus;
    
    try{
      this.modifyCompanyUseCase.execute(dto)

      response.status(201).send()
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}