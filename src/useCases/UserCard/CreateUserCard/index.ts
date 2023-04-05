import { dataSource } from "../../../../ormconfig";
import { UserCardORM } from "../../../database/typeorm/entity/UserCardORM";
import { UserORM } from "../../../database/typeorm/entity/UserORM";
import { UserCardRepository } from "../../../repositories/implementations/typeorm/UserCardRepository";
import { UserRepository } from "../../../repositories/implementations/typeorm/UserRepository";
import { CreateUserCardController } from "./CreateUserCardController";
import { CreateUserCardUseCase } from "./CreateUserCardUseCase";

const userCardRepository = new UserCardRepository(
  dataSource.getRepository(UserCardORM)
)

const userRepository = new UserRepository(
  dataSource.getRepository(UserORM)
)

const createUserCardUseCase = new CreateUserCardUseCase(
  userCardRepository,
  userRepository,
)

const createUserCardController = new CreateUserCardController(
  createUserCardUseCase
)

export { createUserCardController, createUserCardUseCase }