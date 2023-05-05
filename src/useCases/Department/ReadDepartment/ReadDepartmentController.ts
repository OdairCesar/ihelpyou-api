import { Request, Response } from "express";
import { ReadDepartmentUseCase } from "./ReadDepartmentUseCase";
import { IReadDepartmentRequestDTO } from "./ReadDepartmentDTO";

export class ReadDepartmentController {
  constructor(private readDepartmentUseCase: ReadDepartmentUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, name } = request.query;

    let dto: IReadDepartmentRequestDTO = { };

    if (id && typeof id == 'string') dto.id = id;
    if (name && typeof name == 'string') dto.name = name;

    try {
      const department = await this.readDepartmentUseCase.execute(dto);

      return response.status(201).json(department);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
