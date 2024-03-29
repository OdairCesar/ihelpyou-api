import { Request, Response } from "express";
import { ReadOrderUseCase } from "./ReadOrderUseCase";
import { IReadOrderRequestDTO } from "./ReadOrderDTO";

export class ReadOrderController {
  constructor(
    private readOrderUseCase: ReadOrderUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, sttService, sttPayment, idBankCompany, idUserCard, idUser, idService } = request.query;

    if (!id && !sttService && !sttPayment && !idBankCompany && !idUserCard && !idUser && !idService ) {
      return response.status(400).json({
        message: "Não a parametros para a busca",
      });
    }

    let dto: IReadOrderRequestDTO = {};

    if (id && typeof id === 'string') dto.id = id;
    if (sttService && typeof sttService === 'string') {
      if (
        sttService == "Cancelado" || 
        sttService == "Concluido" || 
        sttService == "Em andamento" || 
        sttService == "Confirmado" || 
        sttService == "Esperando Confirmação"
      ) dto.sttService = sttService;
    }
    if (sttPayment && typeof sttPayment === 'string') {
      if (
        sttPayment == "Cancelado" || 
        sttPayment == "Confirmado" || 
        sttPayment == "Aguardado"
      ) dto.sttPayment = sttPayment;
    }
    if (idBankCompany && typeof idBankCompany === 'string') dto.idBankCompany = idBankCompany;
    if (idService && typeof idService === 'string') dto.idService = idService;
    if (idUser && typeof idUser === 'string') dto.idUser = idUser;
    if (idUserCard && typeof idUserCard === 'string') dto.idUserCard = idUserCard;

    try {
      const orders = await this.readOrderUseCase.execute(dto);

      return response.status(201).json(orders);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
