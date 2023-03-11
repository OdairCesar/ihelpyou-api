import { dataSource } from "../../../../ormconfig";
import { AuthORM } from "../../../database/typeorm/entity/AuthORM";
import { AuthRepository } from "../../../repositories/implementations/typeorm/AuthRepository";
import { CreateAuthController } from "./CreateAuthController";
import { CreateAuthUseCase } from "./CreateAuthUseCase";


const typeormAuthRepository = new AuthRepository(
  dataSource.getRepository(AuthORM)
)

const createAuthUseCase = new CreateAuthUseCase(
  typeormAuthRepository,
)

const createAuthController = new CreateAuthController(
  createAuthUseCase
)

export { createAuthUseCase, createAuthController }