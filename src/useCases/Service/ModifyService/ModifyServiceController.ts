import { Request, Response } from "express";
import { IModifyServiceRequestDTO } from "./ModifyServiceDTO";
import { ModifyServiceUseCase } from "./ModifyServiceUseCase";

export class ModifyServiceController {

  constructor(
    private modifyServiceUseCase: ModifyServiceUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { name, description, minTime, maxTime, image, value, idDepartment, idCompany } = request.body
    const id = request.params.id
    let dto: IModifyServiceRequestDTO = { id }

    if (!id && !name && !description && !minTime && !maxTime && !image && !value && !idDepartment && !idCompany) {
      response.status(400).json({
        message: "Não foi passado nenhum paramentro para fazer alteração"
      })
    }

    if (id && typeof id === 'string') dto.id = id;
    if (name && typeof name === 'string') dto.name = name;
    if (description && typeof description === 'string') dto.description = description;
    if (minTime && typeof minTime === 'string') dto.minTime = minTime;
    if (maxTime && typeof maxTime === 'string') dto.maxTime = maxTime;
    if (image && typeof image === 'string') dto.image = image;
    if (value && typeof value === 'number') dto.value = value;
    if (idDepartment && typeof idDepartment === 'string') dto.idDepartment = idDepartment;
    if (idCompany && typeof idCompany === 'string') dto.idCompany = idCompany;
    
    try{
      this.modifyServiceUseCase.execute(dto)

      response.status(201).send()
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}