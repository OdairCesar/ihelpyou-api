import { OrderEvaluation } from "../../../entities/OrderEvaluation";
import { IOrderEvaluationRepository } from "../../../repositories/IOrderEvaluationRepository";
import { IOrderRepository } from "../../../repositories/IOrderRepository";
import { IServiceRepository } from "../../../repositories/IServiceRepository";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { ICreateOrderEvaluationRequestDTO } from "./CreateOrderEvaluationDTO"

export class CreateOrderEvaluationUseCase {
  constructor(
    private orderEvaluationRepository: IOrderEvaluationRepository,
    private userRepository: IUserRepository,
    private orderRepository: IOrderRepository,
    private serviceRepository: IServiceRepository,
  ) { }

  async execute(data: ICreateOrderEvaluationRequestDTO) {
    const order = await this.orderRepository.findById(data.idOrder) 
    const service = await this.serviceRepository.findById(data.idService)
    const user = await this.userRepository.findById(data.idUser)

    if (!order || !service || !user){
      throw Error('Alguma informação passada é incorreta ou inválida')
    }

    if (!(data.amountStars <= 10) || !(data.amountStars = 0)) {
      throw Error('Numero de estrelas é inválida')
    }

    const orderEvaluation = new OrderEvaluation(data)

    this.orderEvaluationRepository.insert(orderEvaluation)
  }
}