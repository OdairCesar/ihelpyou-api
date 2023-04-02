import { IOrderEvaluationRepository } from "../../../repositories/IOrderEvaluationRepository";

export class DeleteOrderEvaluationUseCase {
  constructor (
    private orderEvaluationRepository: IOrderEvaluationRepository
  ) { }

  async execute(data: IOrderEvaluationRequestDTO) {
    const OrderEvaluation = await this.orderEvaluationRepository.findById(data.id)

    if (!OrderEvaluation){
      throw Error('Não foi possivel deletar essa analise')
    }

    await this.orderEvaluationRepository.delete(OrderEvaluation)
  }
}