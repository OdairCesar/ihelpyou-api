import { dataSource } from "../../../../ormconfig";
import { CompanyStatusORM } from "../../../database/typeorm/entity/CompanyStatusORM";
import { CompanyStatusRepository } from "../../../repositories/implementations/typeorm/CompanyStatusRepository";
import { CreateCompanyStatusController } from "./CreateCompanyStatusController";
import { CreateCompanyStatusUseCase } from "./CreateCompanyStatusUseCase";

const companyStatusRepository = new CompanyStatusRepository(
  dataSource.getRepository(CompanyStatusORM)
)

const createCompanyStatusUseCase = new CreateCompanyStatusUseCase(
  companyStatusRepository
) 

const createCompanyStatusController = new CreateCompanyStatusController(
  createCompanyStatusUseCase
)

export { createCompanyStatusController, createCompanyStatusUseCase }