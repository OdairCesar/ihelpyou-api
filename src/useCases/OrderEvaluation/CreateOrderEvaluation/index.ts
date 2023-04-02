import { dataSource } from "../../../../ormconfig";
import { OrderEvaluationORM } from "../../../database/typeorm/entity/OrderEvaluationORM";
import { OrderORM } from "../../../database/typeorm/entity/OrderORM";
import { ServiceORM } from "../../../database/typeorm/entity/ServiceORM";
import { UserORM } from "../../../database/typeorm/entity/UserORM";
import { OrderEvaluationRepository } from "../../../repositories/implementations/typeorm/OrderEvaluationRepository";
import { OrderRepository } from "../../../repositories/implementations/typeorm/OrderRepository";
import { ServiceRepository } from "../../../repositories/implementations/typeorm/ServiceRepository";
import { UserRepository } from "../../../repositories/implementations/typeorm/UserRepository";
import { CreateOrderEvaluationController } from "./CreateOrderEvaluationController";
import { CreateOrderEvaluationUseCase } from "./CreateOrderEvaluationUseCase";

const orderEvaluationRepository = new OrderEvaluationRepository(
  dataSource.getRepository(OrderEvaluationORM)
)

const userRepository = new UserRepository(
  dataSource.getRepository(UserORM)
)

const orderRepository = new OrderRepository(
  dataSource.getRepository(OrderORM)
)

const serviceRepository = new ServiceRepository(
  dataSource.getRepository(ServiceORM)
)

const createOrderEvaluationUseCase = new CreateOrderEvaluationUseCase(
  orderEvaluationRepository,
  userRepository,
  orderRepository,
  serviceRepository,
)

const createOrderEvaluationController = new CreateOrderEvaluationController(
  createOrderEvaluationUseCase
)

export { createOrderEvaluationController, createOrderEvaluationUseCase }