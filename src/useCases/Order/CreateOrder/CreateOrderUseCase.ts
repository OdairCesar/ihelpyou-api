import { Order } from "../../../entities/Order";
import { IBankCompanyRepository } from "../../../repositories/IBankCompanyRepository";
import { IOrderRepository } from "../../../repositories/IOrderRepository";
import { IServiceRepository } from "../../../repositories/IServiceRepository";
import { IUserCardRepository } from "../../../repositories/IUserCardRepository";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { ICreateOrderRequestDTO } from "./CreateOrderDTO"

export class CreateOrderUseCase {
  constructor(
    private orderRepository: IOrderRepository,
    private userCardRepository: IUserCardRepository,
    private userRepository: IUserRepository,
    private serviceRepository: IServiceRepository,
    private bankCompanyRepository: IBankCompanyRepository
  ) { }

  async execute(data: ICreateOrderRequestDTO) {
    
    const userCard = await this.userCardRepository.findById(data.idUserCard)
    const user = await this.userRepository.findById(data.idUser)
    const service = await this.serviceRepository.findById(data.idService)
    const bankCompany = await this.bankCompanyRepository.findById(data.idBankCompany)

    if (!userCard || !user || !service || !bankCompany) {
      throw Error('Não foi possivel fazer pedido, a informações incorretas')
    } 

    
    if (userCard.idUser != user.id) throw new Error('Esse cartão não pertence a esse usuario');
    if (service.idCompany != bankCompany.idCompany) throw new Error('Esse banco não pertence a essa empresa');
    
    const newOrder = new Order({
      dataStart: data.dateStart ? data.dateStart : new Date(),
      dataFinish: null,
      sttService: 'Esperando Confirmação',
      sttPayment: 'Aguardado',
      idBankCompany: bankCompany.id,
      idService: service.id,
      idUser: user.id,
      idUserCard: userCard.id
    })

    await this.orderRepository.insert(newOrder)
  }
}