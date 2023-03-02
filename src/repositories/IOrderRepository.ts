import { Order } from "../entities/Order"

export interface IOrderRepository {
  findById(id: string): Promise<Order>
  findBySttService(paid: boolean): Promise<Array<Order>>
  findBySttPayment(restriction: boolean): Promise<Array<Order>>
  findByIdBankCompany(admission: Date): Promise<Array<Order>>
  findByIdUserCard(activated: boolean): Promise<Array<Order>>
  findByIdUser(idPlan: string): Promise<Array<Order>>
  findByIdCompanyService(idPlan: string): Promise<Array<Order>>
  findByIdOrderEvalution(idPlan: string): Promise<Array<Order>>
  insert(order: Order): Promise<void>
  update(order: Order): Promise<void>
}