import { Request, Response } from "express";
import { ICreateBaseRegistrationRequestDTO } from "./CreateBaseRegistrationDTO";
import { CreateBaseRegistrationUseCase } from "./CreateBaseRegistrationUseCase";

export class CreateBaseRegistrationController {

  constructor(
    private createBaseRegistrationUseCase: CreateBaseRegistrationUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { name, fone, image, address, addressNumber, neighborhood, idCity, idAuth } = request.body

    if (
      !name || typeof name !== "string" ||
      !fone || typeof fone !== "number" || 
      !address || typeof address !== "string" ||
      !addressNumber || typeof addressNumber !== "number" || 
      !neighborhood || typeof neighborhood !== "string" ||
      !idCity || typeof idCity !== "string" ||
      !idAuth || typeof idAuth !== "string"
    ) {
      return response.status(400).json({
        message: "Está faltando informações"
      })
    }

    let dto: ICreateBaseRegistrationRequestDTO = { 
      name,
      fone,
      address,
      addressNumber,
      neighborhood,
      active: true,
      idCity,
      idAuth
    }

    if (image) {
      dto.image = image
    }

    try {
      await this.createBaseRegistrationUseCase.execute(dto)

      response.status(201).send()
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}