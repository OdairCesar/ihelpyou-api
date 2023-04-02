import { IOrderEvaluationRepository } from "../../../repositories/IOrderEvaluationRepository";
import { IModifyOrderEvaluationRequestDTO } from "./ModifyOrderEvaluationDTO"

export class ModifyOrderEvaluationUseCase {
  constructor(
    private orderEvaluationRepository: IOrderEvaluationRepository
  ) { }

  async execute(data: IModifyOrderEvaluationRequestDTO) {
    const line = await this.orderEvaluationRepository.findById(data.id)

    if (!line) {
      throw Error('A avaliação de pedido informato, não existe')
    }

    if (data.title) line.title = data.title;
    if (data.description) line.description = data.description;

    if (data.amountStars) {
      if (!(data.amountStars <= 10) || !(data.amountStars = 0)) {
        throw Error('Numero de estrelas é inválida')
      }

      line.amountStars = data.amountStars;
    }

    await this.orderEvaluationRepository.update(line)
  }
}