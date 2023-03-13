import { Request, Response } from "express";
import { ICreateBaseRegistrationRequestDTO } from "./CreateBaseRegistrationDTO";
import { CreateBaseRegistrationUseCase } from "./CreateBaseRegistrationUseCase";

export class CreateBaseRegistrationController {

  constructor(
    private createBaseRegistrationUseCase: CreateBaseRegistrationUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { id, name, fone, image, address, addressNumber, neighborhood, active, idCity, idAuth } = request.body

    if (!id || !name || !fone || !address || !addressNumber || !neighborhood || !active || !idCity || !idAuth) {
      response.status(400).json({
        message: "Está faltando informações"
      })
    }

    let dto: ICreateBaseRegistrationRequestDTO = { 
      id,
      name,
      fone,
      address,
      addressNumber,
      neighborhood,
      active,
      idCity,
      idAuth
    }

    if (image) {
      dto.image = image
    }

    try{
      this.createBaseRegistrationUseCase.execute(dto)

      response.status(201).send()
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}