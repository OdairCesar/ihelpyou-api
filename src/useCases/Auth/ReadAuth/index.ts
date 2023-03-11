import { dataSource } from "../../../../ormconfig";
import { AuthORM } from "../../../database/typeorm/entity/AuthORM";
import { AuthRepository } from "../../../repositories/implementations/typeorm/AuthRepository";
import { ReadAuthController } from "./ReadAuthController";
import { ReadAuthUseCase } from "./ReadAuthUseCase";


const typeormAuthRepository = new AuthRepository(
  dataSource.getRepository(AuthORM)
)

const readAuthUseCase = new ReadAuthUseCase(
  typeormAuthRepository,
)

const readAuthController = new ReadAuthController(
  readAuthUseCase
)

export { readAuthUseCase, readAuthController }