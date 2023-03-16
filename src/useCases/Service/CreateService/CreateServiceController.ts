import { Request, Response } from "express";
import { ICreateServiceRequestDTO } from "./CreateServiceDTO";
import { CreateServiceUseCase } from "./CreateServiceUseCase";

export class CreateServiceController {

  constructor(
    private createServiceUseCase: CreateServiceUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { name, description, minTime, maxTime, image, value, idDepartment, idCompany } = request.body

    if (!name || !image || !value || !idDepartment || !idCompany) {
      response.status(400).json({
        message: "Está faltando informações necessárias, para fazer o cadastro da empresa"
      })
    }

    let dto: ICreateServiceRequestDTO = { 
      name, 
      image, 
      value, 
      idDepartment, 
      idCompany
    }

    if (description && typeof description === 'string') dto.description = description;
    if (minTime && typeof minTime === 'string') dto.minTime = minTime;
    if (maxTime && typeof maxTime === 'string') dto.maxTime = maxTime;

    try {
      this.createServiceUseCase.execute(dto)

      response.status(201).send()
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}