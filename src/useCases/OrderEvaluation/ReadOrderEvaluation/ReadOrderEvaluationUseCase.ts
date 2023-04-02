import { IOrderEvaluationRepository } from "../../../repositories/IOrderEvaluationRepository";
import { OrderEvaluation } from "../../../entities/OrderEvaluation";
import { IReadOrderEvaluationRequestDTO } from "./ReadOrderEvaluationDTO";

export class ReadOrderEvaluationUseCase {
  constructor (
    private orderEvaluationRepository: IOrderEvaluationRepository,
  ) {}

  async execute(data: IReadOrderEvaluationRequestDTO) {
    let ordersEvaluations: OrderEvaluation[]

    if (data.id) {
      ordersEvaluations.push(await this.orderEvaluationRepository.findById(data.id))
    } else if (data.date) {
      ordersEvaluations = await this.orderEvaluationRepository.findByDate(data.date)
    } else if (data.amountStars) {
      ordersEvaluations = await this.orderEvaluationRepository.findByStars(data.amountStars)
    } else if (data.idOrder) {
      ordersEvaluations = await this.orderEvaluationRepository.findByIdOrder(data.idOrder)
    } else if (data.idUser) {
      ordersEvaluations = await this.orderEvaluationRepository.findByIdUser(data.idUser)
    } else if (data.idService) {
      ordersEvaluations = await this.orderEvaluationRepository.findByIdService(data.idService)
    }

    if (ordersEvaluations) return ordersEvaluations

    throw new Error('Não houve resultado nas buscas')
  }
}