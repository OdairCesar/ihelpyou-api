import { dataSource } from "../../../../ormconfig";

import { ServiceORM } from "../../../database/typeorm/entity/ServiceORM";
import { DepartmentORM } from "../../../database/typeorm/entity/DepartmentORM";
import { CompanyORM } from "../../../database/typeorm/entity/CompanyORM";

import { DepartmentRepository } from "../../../repositories/implementations/typeorm/DepartmentRepository";
import { ServiceRepository } from "../../../repositories/implementations/typeorm/ServiceRepository";
import { CompanyRepository } from "../../../repositories/implementations/typeorm/CompanyRepository";

import { CreateServiceUseCase } from "./CreateServiceUseCase";
import { CreateServiceController } from "./CreateServiceController";

const typeormServiceRepository = new ServiceRepository(
  dataSource.getRepository(ServiceORM)
)

const typeormDepartmentRepository = new DepartmentRepository(
  dataSource.getRepository(DepartmentORM)
)

const typeormCompanyRepository = new CompanyRepository(
  dataSource.getRepository(CompanyORM)
)

const createServiceUseCase = new CreateServiceUseCase(
  typeormServiceRepository,
  typeormDepartmentRepository,
  typeormCompanyRepository
) 

const createServiceController = new CreateServiceController(
  createServiceUseCase
)

export { createServiceController, createServiceUseCase }