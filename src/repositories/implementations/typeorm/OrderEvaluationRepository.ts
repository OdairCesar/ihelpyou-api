import { Repository } from "typeorm"
import { OrderEvaluationORM } from "../../../database/typeorm/entity/OrderEvaluationORM"
import { OrderEvaluation } from "../../../entities/OrderEvaluation"
import { IOrderEvaluationRepository } from "../../IOrderEvaluationRepository"

export class OrderEvaluationRepository implements IOrderEvaluationRepository {

  constructor (
    private orderEvaluationRepository: Repository<OrderEvaluationORM>
  ) { }


  async findById(id: string): Promise<OrderEvaluation> {
    return await this.orderEvaluationRepository.findOneBy({
      id: id
    })
  }
  

  async findByStars(amountStars: number): Promise<Array<OrderEvaluation>> {
    return await this.orderEvaluationRepository.findBy({
      amountStars: amountStars
    })
  }
  

  async findByIdUser(idUser: string): Promise<Array<OrderEvaluation>> {
    return await this.orderEvaluationRepository.findBy({
      idUser: {
        id: idUser
      }
    })
  }
  

  async findByIdOrder(idOrder: string): Promise<OrderEvaluation[]> {
    return await this.orderEvaluationRepository.findBy({
      idOrder: {
        id: idOrder
      }
    })
  }


  async findByIdCompanyService(idCompanyService: string): Promise<OrderEvaluation[]> {
    return await this.orderEvaluationRepository.findBy({
      idCompanyService: {
        id: idCompanyService
      }
    })
  }
  

  async insert(orderEvaluation: OrderEvaluation): Promise<void> {
    await this.orderEvaluationRepository.insert(orderEvaluation)
  }
  

  async update(orderEvaluation: OrderEvaluation): Promise<void> {
    if (typeof orderEvaluation.id === 'string') this.orderEvaluationRepository.update({ id: orderEvaluation.id }, orderEvaluation)
  }
  

}