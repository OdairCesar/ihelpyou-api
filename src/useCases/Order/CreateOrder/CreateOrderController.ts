import { Request, Response } from "express";
import { ICreateOrderRequestDTO } from "./CreateOrderDTO";
import { CreateOrderUseCase } from "./CreateOrderUseCase";

export class CreateOrderController {

  constructor(
    private createOrderUseCase: CreateOrderUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { dateStart, idBankCompany, idUserCard, idUser, idService } = request.body

    if (!idBankCompany || !idUserCard || !idUser || !idService ) {
      response.status(400).json({
        message: "Está faltando parametros"
      })
    }

    let dto: ICreateOrderRequestDTO = { 
      idBankCompany, 
      idUserCard, 
      idUser, 
      idService
    }

    if (dateStart) {
      if (dateStart instanceof Date) {
        dto.dateStart = dateStart;
      } else {
        var dateArr = dateStart.split('/');
        dto.dateStart =  new Date(dateArr[2], dateArr[1], dateArr[0]);
      }
    }

    try{
      await this.createOrderUseCase.execute(dto)

      response.status(201).send()
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}