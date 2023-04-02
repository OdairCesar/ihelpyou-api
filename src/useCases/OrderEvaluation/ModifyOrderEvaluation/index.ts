import { dataSource } from "../../../../ormconfig";
import { OrderEvaluationORM } from "../../../database/typeorm/entity/OrderEvaluationORM";
import { OrderEvaluationRepository } from "../../../repositories/implementations/typeorm/OrderEvaluationRepository";
import { ModifyOrderEvaluationController } from "./ModifyOrderEvaluationController";
import { ModifyOrderEvaluationUseCase } from "./ModifyOrderEvaluationUseCase";

const typeormOrderEvaluationRepository = new OrderEvaluationRepository(
  dataSource.getRepository(OrderEvaluationORM)
)

const modifyOrderEvaluationUseCase = new ModifyOrderEvaluationUseCase(
  typeormOrderEvaluationRepository
) 

const modifyOrderEvaluationController = new ModifyOrderEvaluationController(
  modifyOrderEvaluationUseCase
)

export { modifyOrderEvaluationController, modifyOrderEvaluationUseCase }