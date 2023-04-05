import { dataSource } from "../../../../ormconfig";
import { UserCardORM } from "../../../database/typeorm/entity/UserCardORM";
import { UserCardRepository } from "../../../repositories/implementations/typeorm/UserCardRepository";
import { DeleteUserCardController } from "./DeleteUserCardController";
import { DeleteUserCardUseCase } from "./DeleteUserCardUseCase";


const typeormUserCardRepository = new UserCardRepository(
  dataSource.getRepository(UserCardORM)
)

const deleteUserCardUseCase = new DeleteUserCardUseCase(
  typeormUserCardRepository,
)

const deleteUserCardController = new DeleteUserCardController(
  deleteUserCardUseCase
)

export { deleteUserCardUseCase, deleteUserCardController }