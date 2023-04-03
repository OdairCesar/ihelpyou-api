import { dataSource } from "../../../../ormconfig";
import { BankCompanyORM } from "../../../database/typeorm/entity/BankCompanyORM";
import { OrderORM } from "../../../database/typeorm/entity/OrderORM";
import { ServiceORM } from "../../../database/typeorm/entity/ServiceORM";
import { UserCardORM } from "../../../database/typeorm/entity/UserCardORM";
import { BankCompanyRepository } from "../../../repositories/implementations/typeorm/BankCompanyRepository";
import { OrderRepository } from "../../../repositories/implementations/typeorm/OrderRepository";
import { ServiceRepository } from "../../../repositories/implementations/typeorm/ServiceRepository";
import { UserCardRepository } from "../../../repositories/implementations/typeorm/UserCardRepository";
import { ModifyOrderController } from "./ModifyOrderController";
import { ModifyOrderUseCase } from "./ModifyOrderUseCase";

const typeormOrderRepository = new OrderRepository(
  dataSource.getRepository(OrderORM)
)

const typeormBankCompanyRepository = new BankCompanyRepository(
  dataSource.getRepository(BankCompanyORM)
)

const typeormUserCardRepository = new UserCardRepository(
  dataSource.getRepository(UserCardORM)
)

const typeormServiceRepository = new ServiceRepository(
  dataSource.getRepository(ServiceORM)
)

const modifyOrderUseCase = new ModifyOrderUseCase(
  typeormOrderRepository,
  typeormUserCardRepository,
  typeormBankCompanyRepository,
  typeormServiceRepository
) 

const modifyOrderController = new ModifyOrderController(
  modifyOrderUseCase
)

export { modifyOrderController, modifyOrderUseCase }