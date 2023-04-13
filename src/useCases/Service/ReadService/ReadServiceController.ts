import { Request, Response } from "express";
import { ReadServiceUseCase } from "./ReadServiceUseCase";
import { IReadServiceRequestDTO } from "./ReadServiceDTO";

export class ReadServiceController {
  constructor(private readServiceUseCase: ReadServiceUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, name, description, minTimeInDay, maxTimeInDay, idDepartment, idCompany } = request.body;

    if (!id && !name && !description && !minTimeInDay && !maxTimeInDay && !idDepartment && !idCompany) {
      return response.status(400).json({
        message: "Não a parametros para a busca",
      });
    }

    let dto: IReadServiceRequestDTO = { };

    if (id && typeof id === 'string') dto.id = id;
    if (name && typeof name === 'string') dto.name = name;
    if (description && typeof description === 'string') dto.description = description;
    if (minTimeInDay && typeof minTimeInDay === 'number') dto.minTimeInDay = minTimeInDay;
    if (maxTimeInDay && typeof maxTimeInDay === 'number') dto.maxTimeInDay = maxTimeInDay;
    if (idDepartment && typeof idDepartment === 'string') dto.idDepartment = idDepartment;
    if (idCompany && typeof idCompany === 'string') dto.idCompany = idCompany;

    try {
      const service = await this.readServiceUseCase.execute(dto);

      return response.status(201).json(service);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}