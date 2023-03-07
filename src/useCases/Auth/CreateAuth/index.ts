import { dataSource } from "../../../../ormconfig";
import { AuthORM } from "../../../database/typeorm/entity/AuthORM";
import { AuthRepository } from "../../../repositories/implementations/typeorm/AuthRepository";
import { CreateAuthController } from "./CreateAuthController";
import { CreateAuthUseCase } from "./CreateAuthUseCase";


const typeormAuthRepository = new AuthRepository(
  dataSource.getRepository(AuthORM)
)

const createUserUseCase = new CreateAuthUseCase(
  typeormAuthRepository,
)

const createAuthController = new CreateAuthController(
  createUserUseCase
)

export { createUserUseCase, createAuthController }