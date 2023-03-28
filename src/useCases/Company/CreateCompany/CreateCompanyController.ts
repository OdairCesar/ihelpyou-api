import { Request, Response } from "express";
import { ICreateCompanyRequestDTO } from "./CreateCompanyDTO";
import { CreateCompanyUseCase } from "./CreateCompanyUseCase";
import { CreateCompanyStatusUseCase } from "../../CompanyStatus/CreateCompanyStatus/CreateCompanyStatusUseCase";

export class CreateCompanyController {

  constructor(
    private createCompanyUseCase: CreateCompanyUseCase,
    private createCompanyStatusUseCase: CreateCompanyStatusUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { id, name, description, mei, cnpj, cpf, idBaseRegistration, idStatus } = request.body

    if ((!id || !name || !idBaseRegistration) || (!cpf && !mei && !cnpj)) {
      response.status(400).json({
        message: "Está faltando informações necessárias, para fazer o cadastro da empresa"
      })
    }

    let dto: ICreateCompanyRequestDTO = { 
      id,
      name,
      idBaseRegistration
    }

    if (description && typeof description === 'string') dto.description = description;
    if (mei && typeof mei === 'number') dto.mei = mei;
    if (cnpj && typeof cnpj === 'number') dto.cnpj = cnpj;
    if (cpf && typeof cpf === 'number') dto.cpf = cpf;
    if (idStatus && typeof idStatus === 'string') {
      dto.idStatus = idStatus;
    } else {
      dto.idStatus = await this.createCompanyStatusUseCase.execute({})
    }

    try{
      this.createCompanyUseCase.execute(dto)

      response.status(201).send()
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}