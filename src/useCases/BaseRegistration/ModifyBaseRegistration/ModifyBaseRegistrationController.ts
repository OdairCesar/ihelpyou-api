import { Request, Response } from "express";
import { IModifyBaseRegistrationRequestDTO } from "./ModifyBaseRegistrationDTO";
import { ModifyBaseRegistrationUseCase } from "./ModifyBaseRegistrationUseCase";

export class ModifyBaseRegistrationController {

  constructor(
    private modifyBaseRegistrationUseCase: ModifyBaseRegistrationUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { name, fone, image, address, addressNumber, neighborhood, active, idCity } = request.body
    const id = request.params.id

    if (!name && !fone && !image && !address && !addressNumber && !neighborhood && !active && !idCity) {
      response.status(400).json({
        message: "Não foi informado qual a modificação"
      })
    }

    let dto: IModifyBaseRegistrationRequestDTO = { id }

    if (id && typeof id === 'string') dto.id = id;
    if (name && typeof name === 'string') dto.name = name;
    if (fone && typeof fone === 'number') dto.fone = fone;
    if (image && typeof image === 'string') dto.image = image;
    if (address && typeof address === 'string') dto.address = address;
    if (addressNumber && typeof addressNumber === 'number') dto.addressNumber = addressNumber;
    if (neighborhood && typeof neighborhood === 'string') dto.neighborhood = neighborhood;
    if (active && typeof active === 'boolean') dto.active = active;
    if (idCity && typeof idCity === 'string') dto.idCity = idCity;

    try{
      this.modifyBaseRegistrationUseCase.execute(dto)

      response.status(201).send()
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}