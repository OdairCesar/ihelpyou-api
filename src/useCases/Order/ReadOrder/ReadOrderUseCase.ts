import { IOrderRepository } from "../../../repositories/IOrderRepository";
import { Order } from "../../../entities/Order";
import { IReadOrderRequestDTO } from "./ReadOrderDTO";

export class ReadOrderUseCase {
  constructor (
    private orderRepository: IOrderRepository,
  ) {}

  async execute(data: IReadOrderRequestDTO) {
    let orders: Order[]

    if (data.id) {
      orders.push(await this.orderRepository.findById(data.id))
    } else if (data.sttService) {
      orders = await this.orderRepository.findBySttService(data.sttService)
    } else if (data.sttPayment) {
      orders = await this.orderRepository.findBySttPayment(data.sttPayment)
    } else if (data.idBankCompany) {
      orders = await this.orderRepository.findByIdBankCompany(data.idBankCompany)
    } else if (data.idUser) {
      orders = await this.orderRepository.findByIdUser(data.idUser)
    } else if (data.idService) {
      orders = await this.orderRepository.findByIdService(data.idService)
    } else if (data.idUserCard) {
      orders = await this.orderRepository.findByIdUserCard(data.idUserCard)
    }

    if (orders) return orders

    throw new Error('Não houve resultado nas buscas')
  }
}