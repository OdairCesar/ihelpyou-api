import { dataSource } from "../../../../ormconfig";
import { UserCardORM } from "../../../database/typeorm/entity/UserCardORM";
import { UserCardRepository } from "../../../repositories/implementations/typeorm/UserCardRepository";
import { ReadUserCardController } from "./ReadUserCardController";
import { ReadUserCardUseCase } from "./ReadUserCardUseCase";

const typeormUserCardRepository = new UserCardRepository(
  dataSource.getRepository(UserCardORM)
);

const readUserCardUseCase = new ReadUserCardUseCase(
  typeormUserCardRepository
);

const readUserCardController = new ReadUserCardController(
  readUserCardUseCase
);

export { readUserCardUseCase, readUserCardController };
