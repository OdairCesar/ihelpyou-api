import { dataSource } from "../../../../ormconfig";
import { BaseRegistrationORM } from "../../../database/typeorm/entity/BaseRegistrationORM";
import { BaseRegistrationRepository } from "../../../repositories/implementations/typeorm/BaseRegistrationRepository";
import { ReadBaseRegistrationController } from "./ReadBaseRegistrationController";
import { ReadBaseRegistrationUseCase } from "./ReadBaseRegistrationUseCase";


const typeormBaseRegistrationRepository = new BaseRegistrationRepository(
  dataSource.getRepository(BaseRegistrationORM)
)

const readBaseRegistrationUseCase = new ReadBaseRegistrationUseCase(
  typeormBaseRegistrationRepository,
)

const readBaseRegistrationController = new ReadBaseRegistrationController(
  readBaseRegistrationUseCase
)

export { readBaseRegistrationUseCase, readBaseRegistrationController }