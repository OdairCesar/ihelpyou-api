import { dataSource } from "../../../../ormconfig";

import { CompanyORM } from "../../../database/typeorm/entity/CompanyORM";
import { ServiceORM } from "../../../database/typeorm/entity/ServiceORM";
import { DepartmentORM } from "../../../database/typeorm/entity/DepartmentORM";

import { CompanyRepository } from "../../../repositories/implementations/typeorm/CompanyRepository";
import { ServiceRepository } from "../../../repositories/implementations/typeorm/ServiceRepository";
import { DepartmentRepository } from "../../../repositories/implementations/typeorm/DepartmentRepository";

import { ModifyServiceController } from "./ModifyServiceController";
import { ModifyServiceUseCase } from "./ModifyServiceUseCase";

const typeormCompanyRepository = new CompanyRepository(
  dataSource.getRepository(CompanyORM)
)

const typeormServiceRepository = new ServiceRepository(
  dataSource.getRepository(ServiceORM)
)

const typeormDepartmentRepository = new DepartmentRepository(
  dataSource.getRepository(DepartmentORM)
)

const modifyServiceUseCase = new ModifyServiceUseCase(
  typeormServiceRepository,
  typeormDepartmentRepository,
  typeormCompanyRepository
) 

const modifyServiceController = new ModifyServiceController(
  modifyServiceUseCase
)

export { modifyServiceController, modifyServiceUseCase }