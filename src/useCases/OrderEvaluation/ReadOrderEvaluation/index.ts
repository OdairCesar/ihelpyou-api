
import { dataSource } from "../../../../ormconfig";
import { OrderEvaluationORM } from "../../../database/typeorm/entity/OrderEvaluationORM";
import { OrderEvaluationRepository } from "../../../repositories/implementations/typeorm/OrderEvaluationRepository";
import { ReadOrderEvaluationController } from "./ReadOrderEvaluationController";
import { ReadOrderEvaluationUseCase } from "./ReadOrderEvaluationUseCase";


const typeormOrderEvaluationRepository = new OrderEvaluationRepository(
  dataSource.getRepository(OrderEvaluationORM)
)

const readOrderEvaluationUseCase = new ReadOrderEvaluationUseCase(
  typeormOrderEvaluationRepository,
)

const readOrderEvaluationController = new ReadOrderEvaluationController(
  readOrderEvaluationUseCase
)

export { readOrderEvaluationUseCase, readOrderEvaluationController }