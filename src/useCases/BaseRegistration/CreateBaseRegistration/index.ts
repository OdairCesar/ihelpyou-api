import { dataSource } from "../../../../ormconfig";
import { AuthORM } from "../../../database/typeorm/entity/AuthORM";
import { BaseRegistrationORM } from "../../../database/typeorm/entity/BaseRegistrationORM";
import { AuthRepository } from "../../../repositories/implementations/typeorm/AuthRepository";
import { BaseRegistrationRepository } from "../../../repositories/implementations/typeorm/BaseRegistrationRepository";
import { CreateBaseRegistrationController } from "./CreateBaseRegistrationController";
import { CreateBaseRegistrationUseCase } from "./CreateBaseRegistrationUseCase";

const baseRegistrationRepository = new BaseRegistrationRepository(
  dataSource.getRepository(BaseRegistrationORM)
)

const authRepository = new AuthRepository(
  dataSource.getRepository(AuthORM)
)

const createBaseRegistrationUseCase = new CreateBaseRegistrationUseCase(
  baseRegistrationRepository,
  authRepository
) 

const createBaseRegistrationController = new CreateBaseRegistrationController(
  createBaseRegistrationUseCase
)

export { createBaseRegistrationController, createBaseRegistrationUseCase }