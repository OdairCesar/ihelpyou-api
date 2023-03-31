import { dataSource } from "../../../../ormconfig";
import { OrderORM } from "../../../database/typeorm/entity/OrderORM";
import { OrderRepository } from "../../../repositories/implementations/typeorm/OrderRepository";
import { ReadOrderController } from "./ReadOrderController";
import { ReadOrderUseCase } from "./ReadOrderUseCase";


const typeormOrderRepository = new OrderRepository(
  dataSource.getRepository(OrderORM)
)

const readOrderUseCase = new ReadOrderUseCase(
  typeormOrderRepository,
)

const readOrderController = new ReadOrderController(
  readOrderUseCase
)

export { readOrderUseCase, readOrderController }