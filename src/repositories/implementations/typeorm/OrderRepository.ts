import { Repository } from "typeorm";
import { Order } from "../../../entities/Order"
import { IOrderRepository } from "../../IOrderRepository";
import { OrderORM } from "../../../database/typeorm/entity/OrderORM";

export class OrderRepository implements IOrderRepository {

  constructor (
    private orderRepository: Repository<OrderORM>
  ) { }


  async findById(id: string): Promise<Order> {
    return await this.orderRepository.findOneBy({
      id: id
    })
  }
  

  async findBySttService(sttService: 'Cancelado' | 'Concluido' | 'Em andamento' | 'Confirmado' | 'Esperando Confirmação'): Promise<Array<Order>> {
    return await this.orderRepository.findBy({
      sttService: sttService
    })
  }
  

  async findBySttPayment(sttPayment: 'Cancelado' | 'Confirmado' | 'Aguardado'): Promise<Array<Order>> {
    return await this.orderRepository.findBy({
      sttPayment: sttPayment
    })
  }
  

  async findByIdBankCompany(idBankCompany: string): Promise<Array<Order>> {
    return await this.orderRepository.findBy({
      idBankCompany: {
        id: idBankCompany
      }
    })
  }
  

  async findByIdUserCard(idUserCard: string): Promise<Array<Order>> {
    return await this.orderRepository.findBy({
      idUserCard: {
        id: idUserCard
      }
    })
  }
  

  async findByIdUser(idUser: string): Promise<Array<Order>> {
    return await this.orderRepository.findBy({
      idUser: {
        id: idUser
      }
    })
  }
  

  async findByIdService(idService: string): Promise<Array<Order>> {
    return await this.orderRepository.findBy({
      idService: {
        id: idService
      }
    })
  }
  

  async insert(order: Order): Promise<void> {
    await this.orderRepository.insert(order)
  }
  

  async update(order: Order): Promise<void> {
    if (typeof order.id === 'string') this.orderRepository.update({ id: order.id }, order)
  }
  

}