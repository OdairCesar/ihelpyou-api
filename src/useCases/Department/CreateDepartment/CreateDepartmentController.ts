import { Request, Response } from "express";
import { ICreateDepartmentRequestDTO } from "./CreateDepartmentDTO";
import { CreateDepartmentUseCase } from "./CreateDepartmentUseCase";

export class CreateDepartmentController {

  constructor(
    private createDepartmentUseCase: CreateDepartmentUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { name, description, image } = request.body

    if (!name) {
      response.status(400).json({
        message: "Está faltando parametros"
      })
    }

    let dto: ICreateDepartmentRequestDTO = { name }

    if (description && typeof description === "string") dto.description = description;
    if (image && typeof image === "string") dto.image = image;

    try{
      await this.createDepartmentUseCase.execute(dto)

      response.status(201).send()
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}