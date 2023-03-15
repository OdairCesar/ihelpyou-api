import { Request, Response } from "express";
import { IModifyCompanyRequestDTO } from "./ModifyCompanyDTO";
import { ModifyCompanyUseCase } from "./ModifyCompanyUseCase";
import { cnpj as cnpjValidator, cpf as cpfValidator } from 'cpf-cnpj-validator';

export class ModifyCompanyController {

  constructor(
    private modifyCompanyUseCase: ModifyCompanyUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { name, description, cnpj, cpf, mei, idStatus } = request.body
    const id = request.params.id
    let dto: IModifyCompanyRequestDTO = { id }

    if (!cnpj && !cpf && !mei) {
      response.status(400).json({
        message: "A empresa precisa de um tipo de identificação"
      })
    }

    if (!name && !description && !idStatus) {
      response.status(400).json({
        message: "Não foi informado qual a modificação"
      })
    }

    if (mei && typeof mei === 'number') {
      if (!cnpjValidator.isValid(dto.mei.toString())) {
        response.status(400).json({
          message: "MEI informato é invalido"
        })
      }
      
      dto.mei = mei;
    }
    
    if (cnpj && typeof cnpj === 'number') {
      if (!cnpjValidator.isValid(dto.cnpj.toString())) {
        response.status(400).json({
          message: "CNPJ informato é invalido"
        })
      }
      
      dto.cnpj = cnpj;
    }

    if (cpf && typeof cpf === 'number') {
      if (!cpfValidator.isValid(dto.cpf.toString())) {
        response.status(400).json({
          message: "CPF informato é invalido"
        })
      }

      dto.cpf = cpf;
    }

    if (id && typeof id === 'string') dto.id = id;
    if (name && typeof name === 'string') dto.name = name;
    if (description && typeof description === 'string') dto.description = description;
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