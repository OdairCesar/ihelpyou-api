import { Request, Response } from "express";
import { IModifyDepartmentRequestDTO } from "./ModifyDepartmentDTO";
import { ModifyDepartmentUseCase } from "./ModifyDepartmentUseCase";

export class ModifyDepartmentController {

  constructor(
    private modifyDepartmentUseCase: ModifyDepartmentUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { name, description, image } = request.body
    const id = request.params.id

    if (!name && !description && !image) {
      response.status(400).json({
        message: "Não foi informado qual a modificação"
      })
    }

    let dto: IModifyDepartmentRequestDTO = { id }

    if (name && typeof name == 'string') dto.name = name
    if (description && typeof description == 'string') dto.description = description;
    if (image && typeof image == 'string') dto.image = image;

    try{
      this.modifyDepartmentUseCase.execute(dto)

      response.status(201).send()
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}