import { dataSource } from "../../../../ormconfig";

import { ServiceORM } from "../../../database/typeorm/entity/ServiceORM";
import { DepartmentORM } from "../../../database/typeorm/entity/DepartmentORM";
import { CompanyORM } from "../../../database/typeorm/entity/CompanyORM";

import { DepartmentRepository } from "../../../repositories/implementations/typeorm/DepartmentRepository";
import { ServiceRepository } from "../../../repositories/implementations/typeorm/ServiceRepository";
import { CompanyRepository } from "../../../repositories/implementations/typeorm/CompanyRepository";

import { CreateServiceUseCase } from "./CreateServiceUseCase";
import { CreateServiceController } from "./CreateServiceController";

const serviceRepository = new ServiceRepository(
  dataSource.getRepository(ServiceORM)
)

const departmentRepository = new DepartmentRepository(
  dataSource.getRepository(DepartmentORM)
)

const companyRepository = new CompanyRepository(
  dataSource.getRepository(CompanyORM)
)

const createServiceUseCase = new CreateServiceUseCase(
  serviceRepository,
  departmentRepository,
  companyRepository
) 

const createServiceController = new CreateServiceController(
  createServiceUseCase
)

export { createServiceController, createServiceUseCase }