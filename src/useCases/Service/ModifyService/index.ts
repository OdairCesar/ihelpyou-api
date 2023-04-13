import { dataSource } from "../../../../ormconfig";
import { ServiceORM } from "../../../database/typeorm/entity/ServiceORM";
import { DepartmentORM } from "../../../database/typeorm/entity/DepartmentORM";
import { ServiceRepository } from "../../../repositories/implementations/typeorm/ServiceRepository";
import { DepartmentRepository } from "../../../repositories/implementations/typeorm/DepartmentRepository";
import { ModifyServiceController } from "./ModifyServiceController";
import { ModifyServiceUseCase } from "./ModifyServiceUseCase";

const typeormServiceRepository = new ServiceRepository(
  dataSource.getRepository(ServiceORM)
)

const typeormDepartmentRepository = new DepartmentRepository(
  dataSource.getRepository(DepartmentORM)
)

const modifyServiceUseCase = new ModifyServiceUseCase(
  typeormServiceRepository,
  typeormDepartmentRepository,
) 

const modifyServiceController = new ModifyServiceController(
  modifyServiceUseCase
)

export { modifyServiceController, modifyServiceUseCase }