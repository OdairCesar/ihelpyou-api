import { Request, Response } from "express";
import { ICreateDepartmentRequestDTO } from "./CreateDepartmentDTO";
import { CreateDepartmentUseCase } from "./CreateDepartmentUseCase";

export class CreateDepartmentController {

  constructor(
    private createDepartmentUseCase: CreateDepartmentUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { id, name, description, image } = request.body

    if (!id || !name) {
      response.status(400).json({
        message: "Está faltando parametros"
      })
    }

    let dto: ICreateDepartmentRequestDTO = { 
      id,
      name
    }

    if (description) {
      dto.description = description
    }

    if (image) {
      dto.image = image
    }

    try{
      this.createDepartmentUseCase.execute(dto)

      response.status(201).send()
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}