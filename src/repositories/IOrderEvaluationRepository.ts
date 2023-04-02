import { OrderEvaluation } from "../entities/OrderEvaluation"

export interface IOrderEvaluationRepository {
  findById(id: string): Promise<OrderEvaluation>
  findByDate(date: Date): Promise<Array<OrderEvaluation>>
  findByStars(amountStars: number): Promise<Array<OrderEvaluation>>
  findByIdUser(idUser: string): Promise<Array<OrderEvaluation>>
  findByIdOrder(idOrder: string): Promise<Array<OrderEvaluation>>
  findByIdService(idService: string): Promise<Array<OrderEvaluation>>
  insert(orderEvaluation: OrderEvaluation): Promise<void>
  update(orderEvaluation: OrderEvaluation): Promise<void>
  delete(orderEvaluation: OrderEvaluation): Promise<void>
}