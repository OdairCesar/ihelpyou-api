import { Request, Response } from "express";
import { ReadBaseRegistrationUseCase } from "./ReadBaseRegistrationUseCase";
import { IReadBaseRegistrationRequestDTO } from "./ReadBaseRegistrationDTO";

export class ReadBaseRegistrationController {
  constructor(private readBaseRegistrationUseCase: ReadBaseRegistrationUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, idAuth, idCity } = request.body;

    if (!id && !idAuth && !idCity) {
      return response.status(400).json({
        message: "Não a parametros para a busca",
      });
    }

    let dto: IReadBaseRegistrationRequestDTO = {};

    if (id && typeof id === 'string') dto.id = id;
    if (idAuth && typeof idAuth === 'string') dto.idAuth = idAuth;
    if (idCity && typeof idCity === 'string') dto.idCity = idCity;

    try {
      const basesRegistration = await this.readBaseRegistrationUseCase.execute(dto);

      return response.status(201).json(basesRegistration);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
