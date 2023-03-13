import { dataSource } from "../../../../ormconfig";
import { BaseRegistrationORM } from "../../../database/typeorm/entity/BaseRegistrationORM";
import { BaseRegistrationRepository } from "../../../repositories/implementations/typeorm/BaseRegistrationRepository";
import { ModifyBaseRegistrationController } from "./ModifyBaseRegistrationController";
import { ModifyBaseRegistrationUseCase } from "./ModifyBaseRegistrationUseCase";

const typeormBaseRegistrationRepository = new BaseRegistrationRepository(
  dataSource.getRepository(BaseRegistrationORM)
)

const modifyBaseRegistrationUseCase = new ModifyBaseRegistrationUseCase(
  typeormBaseRegistrationRepository
) 

const modifyBaseRegistrationController = new ModifyBaseRegistrationController(
  modifyBaseRegistrationUseCase
)

export { modifyBaseRegistrationController, modifyBaseRegistrationUseCase }