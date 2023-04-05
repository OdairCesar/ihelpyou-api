import { dataSource } from "../../../../ormconfig";
import { StateORM } from "../../../database/typeorm/entity/StateORM";
import { StateRepository } from "../../../repositories/implementations/typeorm/StateRepository";
import { ReadStateController } from "./ReadStateController";
import { ReadStateUseCase } from "./ReadStateUseCase";

const typeormStateRepository = new StateRepository(
  dataSource.getRepository(StateORM)
)

const readStateUseCase = new ReadStateUseCase(
  typeormStateRepository,
)

const readStateController = new ReadStateController(
  readStateUseCase
)

export { readStateUseCase, readStateController }