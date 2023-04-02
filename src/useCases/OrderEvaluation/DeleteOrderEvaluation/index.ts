import { dataSource } from "../../../../ormconfig";
import { OrderEvaluationORM } from "../../../database/typeorm/entity/OrderEvaluationORM";
import { OrderEvaluationRepository } from "../../../repositories/implementations/typeorm/OrderEvaluationRepository";
import { DeleteOrderEvaluationController } from "./DeleteOrderEvaluationController";
import { DeleteOrderEvaluationUseCase } from "./DeleteOrderEvaluationUseCase";


const typeormOrderEvaluationRepository = new OrderEvaluationRepository(
  dataSource.getRepository(OrderEvaluationORM)
)

const deleteOrderEvaluationUseCase = new DeleteOrderEvaluationUseCase(
  typeormOrderEvaluationRepository,
)

const deleteOrderEvaluationController = new DeleteOrderEvaluationController(
  deleteOrderEvaluationUseCase
)

export { deleteOrderEvaluationUseCase, deleteOrderEvaluationController }