import { OrderEvaluation } from "../entities/OrderEvaluation"

export interface IOrderEvaluationRepository {
  findById(id: string): Promise<OrderEvaluation>
  findByStars(amountStars: number): Promise<Array<OrderEvaluation>>
  findByIdUser(idUser: string): Promise<Array<OrderEvaluation>>
  findByIdOrder(idOrder: string): Promise<Array<OrderEvaluation>>
  findByIdCompanyService(idCompanyService: string): Promise<Array<OrderEvaluation>>
  insert(orderEvaluation: OrderEvaluation): Promise<void>
  update(orderEvaluation: OrderEvaluation): Promise<void>
}