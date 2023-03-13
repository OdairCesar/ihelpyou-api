import { Request, Response } from "express";
import { ReadCityUseCase } from "./ReadCityUseCase";
import { IReadCityRequestDTO } from "./ReadCityDTO";

export class ReadCityController {
  constructor(private readCityUseCase: ReadCityUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, idState } = request.body;

    if (!id && !idState) {
      return response.status(400).json({
        message: "Não a parametros para a busca",
      });
    }

    let dto: IReadCityRequestDTO = {};

    if (id && typeof id === 'string') dto.id = id;
    if (idState && typeof idState === 'string') dto.idState = idState;

    try {
      const cities = await this.readCityUseCase.execute(dto);

      return response.status(201).json(cities);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
