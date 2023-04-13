import { IBankCompanyRepository } from "../../../repositories/IBankCompanyRepository";
import { IOrderRepository } from "../../../repositories/IOrderRepository";
import { IServiceRepository } from "../../../repositories/IServiceRepository";
import { IUserCardRepository } from "../../../repositories/IUserCardRepository";
import { IModifyOrderRequestDTO } from "./ModifyOrderDTO";

export class ModifyOrderUseCase {
  constructor(
    private orderRepository: IOrderRepository,
    private userCardRepository: IUserCardRepository,
    private bankCompanyRepository: IBankCompanyRepository,
    private serviceRepository: IServiceRepository
  ) { }

  async execute(data: IModifyOrderRequestDTO) {
    const line = await this.orderRepository.findById(data.id)

    if (!line) throw Error('Pedido não encontrado');

    if (data.idUserCard) {
      const userCard = await this.userCardRepository.findById(data.idUserCard);

      if (!userCard) throw Error('Cartão não encontrado');

      if (userCard.idUser != line.idUser) throw Error('Cartão não pertence a esse usuario');
      
      line.idUserCard = userCard.id
    }

    if (data.idBankCompany) {
      const bankCompany = await this.bankCompanyRepository.findById(data.idBankCompany);
      const service = await this.serviceRepository.findById(line.idService)

      if (!bankCompany) throw new Error('Banco não encontrado');

      if (bankCompany.idCompany != service.idCompany) throw new Error('Banco não pertence a essa empresa');
      
      line.idBankCompany = bankCompany.id
    }

    if (data.sttService) {
      if (data.sttService == 'Confirmado') {

        line.sttService = data.sttService
        line.sttPayment = 'Aguardado'

      } else if (data.sttService == 'Em andamento') {

        //-->> Aqui Vamos efetuar a cobrança no cartão. SE SUCESSO: atribuimos o novo status. SE FALHA: retornamos erro.
        line.sttService = data.sttService

      } else if (data.sttService == 'Concluido') {

        if (line.sttPayment != 'Confirmado') throw new Error('Não é possuivel concluir o serviço, pois está faltando seu pagamento');
        line.sttService = data.sttService

      } else if (data.sttService == 'Cancelado') { 

        line.sttService = data.sttService
        line.sttPayment = 'Cancelado'

      } else {

        throw new Error('Status informato não é aceito')
        
      }
    }

    await this.orderRepository.update(line);
  }
}