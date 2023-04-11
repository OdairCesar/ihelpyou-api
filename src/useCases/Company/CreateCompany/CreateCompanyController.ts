import { Request, Response } from "express";
import { ICreateCompanyRequestDTO } from "./CreateCompanyDTO";
import { CreateCompanyUseCase } from "./CreateCompanyUseCase";
import { CreateCompanyStatusUseCase } from "../../CompanyStatus/CreateCompanyStatus/CreateCompanyStatusUseCase";

export class CreateCompanyController {

  constructor(
    private createCompanyUseCase: CreateCompanyUseCase,
  ) { }

  async handle(request: Request, response: Response) {
    const { name, description, mei, cnpj, cpf, idBaseRegistration, idStatus } = request.body

    if ((!name || !idBaseRegistration) || (!cpf && !mei && !cnpj)) {
      response.status(400).json({
        message: "Está faltando informações necessárias, para fazer o cadastro da empresa"
      })
    }

    let dto: ICreateCompanyRequestDTO = {
      name,
      idBaseRegistration
    }

    if (description && typeof description === 'string') dto.description = description;
    if (mei && typeof mei === 'number') dto.mei = mei;
    if (cnpj && typeof cnpj === 'number') dto.cnpj = cnpj;
    if (cpf && typeof cpf === 'number') dto.cpf = cpf;
    if (idStatus && typeof idStatus === 'string') dto.idStatus = idStatus;

    try{
      await this.createCompanyUseCase.execute(dto)

      response.status(201).send()
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}