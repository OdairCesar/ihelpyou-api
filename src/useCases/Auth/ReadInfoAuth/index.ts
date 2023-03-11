import { dataSource } from "../../../../ormconfig";
import { AuthORM } from "../../../database/typeorm/entity/AuthORM";
import { AuthRepository } from "../../../repositories/implementations/typeorm/AuthRepository";
import { ReadInfoAuthController } from "./ReadInfoAuthController";
import { ReadInfoAuthUseCase } from "./ReadInfoAuthUseCase";


const typeormAuthRepository = new AuthRepository(
  dataSource.getRepository(AuthORM)
)

const readInfoAuthUseCase = new ReadInfoAuthUseCase(
  typeormAuthRepository,
)

const readInfoAuthController = new ReadInfoAuthController(
  readInfoAuthUseCase
)

export { readInfoAuthUseCase, readInfoAuthController }