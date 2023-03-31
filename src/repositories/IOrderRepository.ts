import { Order } from "../entities/Order"

export interface IOrderRepository {
  findById(id: string): Promise<Order>
  findBySttService(sttService: 'Cancelado' | 'Concluido' | 'Em andamento' | 'Confirmado' | 'Esperando Confirmação'): Promise<Array<Order>>
  findBySttPayment(sttPayment: 'Cancelado' | 'Confirmado' | 'Aguardado'): Promise<Array<Order>>
  findByIdBankCompany(idBankCompany: string): Promise<Array<Order>>
  findByIdUserCard(idUserCard: string): Promise<Array<Order>>
  findByIdUser(idUser: string): Promise<Array<Order>>
  findByIdService(idService: string): Promise<Array<Order>>
  insert(order: Order): Promise<void>
  update(order: Order): Promise<void>
}