import { dataSource } from "../../../../ormconfig";
import { BankCompanyORM } from "../../../database/typeorm/entity/BankCompanyORM";
import { OrderORM } from "../../../database/typeorm/entity/OrderORM";
import { ServiceORM } from "../../../database/typeorm/entity/ServiceORM";
import { UserCardORM } from "../../../database/typeorm/entity/UserCardORM";
import { UserORM } from "../../../database/typeorm/entity/UserORM";
import { BankCompanyRepository } from "../../../repositories/implementations/typeorm/BankCompanyRepository";
import { OrderRepository } from "../../../repositories/implementations/typeorm/OrderRepository";
import { ServiceRepository } from "../../../repositories/implementations/typeorm/ServiceRepository";
import { UserCardRepository } from "../../../repositories/implementations/typeorm/UserCardRepository";
import { UserRepository } from "../../../repositories/implementations/typeorm/UserRepository";
import { CreateOrderController } from "./CreateOrderController";
import { CreateOrderUseCase } from "./CreateOrderUseCase";

const typeormOrderRepository = new OrderRepository(
  dataSource.getRepository(OrderORM)
)

const typeormUserCardRepository = new UserCardRepository(
  dataSource.getRepository(UserCardORM)
)

const typeormUserRepository = new UserRepository(
  dataSource.getRepository(UserORM)
)

const typeormServiceRepository = new ServiceRepository(
  dataSource.getRepository(ServiceORM)
)

const typeormBankCompanyRepository = new BankCompanyRepository(
  dataSource.getRepository(BankCompanyORM)
)

const createOrderUseCase = new CreateOrderUseCase(
  typeormOrderRepository,
  typeormUserCardRepository,
  typeormUserRepository,
  typeormServiceRepository,
  typeormBankCompanyRepository
) 

const createOrderController = new CreateOrderController(
  createOrderUseCase
)

export { createOrderController, createOrderUseCase }