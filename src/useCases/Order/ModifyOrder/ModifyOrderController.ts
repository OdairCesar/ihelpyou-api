import { Request, Response } from "express";
import { IModifyOrderRequestDTO } from "./ModifyOrderDTO";
import { ModifyOrderUseCase } from "./ModifyOrderUseCase";

export class ModifyOrderController {

  constructor(
    private modifyOrderUseCase: ModifyOrderUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { sttService, sttPayment, idBankCompany, idUserCard } = request.body
    const id = request.params.id

    if (!sttService || !sttPayment || !idBankCompany || !idUserCard) {
      response.status(400).json({
        message: "Não foi informado qual a modificação"
      })
    }

    let dto: IModifyOrderRequestDTO = { id }

    if (sttService) dto.sttService = sttService;
    if (sttPayment) dto.sttPayment = sttPayment;
    if (idBankCompany && typeof idBankCompany == 'string') dto.idBankCompany = idBankCompany;
    if (idUserCard && typeof idUserCard == 'string') dto.idUserCard = idUserCard;

    try{
      this.modifyOrderUseCase.execute(dto)

      response.status(201).send()
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}