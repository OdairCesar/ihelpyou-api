import { dataSource } from "../../../../ormconfig";
import { AuthORM } from "../../../database/typeorm/entity/AuthORM";
import { AuthRepository } from "../../../repositories/implementations/typeorm/AuthRepository";
import { ModifyAuthController } from "./ModifyAuthController";
import { ModifyAuthUseCase } from "./ModifyAuthUseCase";


const typeormAuthRepository = new AuthRepository(
  dataSource.getRepository(AuthORM)
)

const modifyUserUseCase = new ModifyAuthUseCase(
  typeormAuthRepository,
)

const modifyAuthController = new ModifyAuthController(
  modifyUserUseCase
)

export { modifyUserUseCase, modifyAuthController }