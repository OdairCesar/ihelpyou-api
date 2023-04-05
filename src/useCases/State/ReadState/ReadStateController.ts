import { Request, Response } from "express";
import { ReadStateUseCase } from "./ReadStateUseCase";
import { IReadStateRequestDTO } from "./ReadStateDTO";

export class ReadStateController {
  constructor(private readStateUseCase: ReadStateUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, name, country } = request.body;

    if (!id && !name && !country) {
      return response.status(400).json({
        message: "Não a parametros para a busca",
      });
    }

    let dto: IReadStateRequestDTO = {};

    if (id && typeof id === 'string') dto.id = id;
    if (name && typeof name === 'string') dto.name = name;
    if (country && typeof country === 'string') dto.country = country;

    try {
      const states = await this.readStateUseCase.execute(dto);

      return response.status(201).json(states);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
