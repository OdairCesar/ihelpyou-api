import { dataSource } from "../../../../ormconfig";
import { BaseRegistrationORM } from "../../../database/typeorm/entity/BaseRegistrationORM";
import { CompanyORM } from "../../../database/typeorm/entity/CompanyORM";
import { CompanyStatusORM } from "../../../database/typeorm/entity/CompanyStatusORM";
import { BaseRegistrationRepository } from "../../../repositories/implementations/typeorm/BaseRegistrationRepository";
import { CompanyRepository } from "../../../repositories/implementations/typeorm/CompanyRepository";
import { CompanyStatusRepository } from "../../../repositories/implementations/typeorm/CompanyStatusRepository";
import { CreateCompanyController } from "./CreateCompanyController";
import { CreateCompanyUseCase } from "./CreateCompanyUseCase";

const companyRepository = new CompanyRepository(
  dataSource.getRepository(CompanyORM)
)

const baseRegistrationRepository = new BaseRegistrationRepository(
  dataSource.getRepository(BaseRegistrationORM)
)

const companyStatusRepository = new CompanyStatusRepository(
  dataSource.getRepository(CompanyStatusORM)
)

const createCompanyUseCase = new CreateCompanyUseCase(
  companyRepository,
  baseRegistrationRepository,
  companyStatusRepository
) 

const createCompanyController = new CreateCompanyController(
  createCompanyUseCase,
)

export { createCompanyController, createCompanyUseCase }