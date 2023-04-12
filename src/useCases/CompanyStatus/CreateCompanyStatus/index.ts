import { dataSource } from "../../../../ormconfig";
import { CompanyORM } from "../../../database/typeorm/entity/CompanyORM";
import { CompanyStatusORM } from "../../../database/typeorm/entity/CompanyStatusORM";
import { PlatformPlanORM } from "../../../database/typeorm/entity/PlatformPlanORM";
import { CompanyRepository } from "../../../repositories/implementations/typeorm/CompanyRepository";
import { CompanyStatusRepository } from "../../../repositories/implementations/typeorm/CompanyStatusRepository";
import { PlatformPlanRepository } from "../../../repositories/implementations/typeorm/PlatformPlanRepository";
import { CreateCompanyStatusController } from "./CreateCompanyStatusController";
import { CreateCompanyStatusUseCase } from "./CreateCompanyStatusUseCase";

const typeormCompanyStatusRepository = new CompanyStatusRepository(
  dataSource.getRepository(CompanyStatusORM)
)

const typeormPlatformPlanRepository = new PlatformPlanRepository(
  dataSource.getRepository(PlatformPlanORM)
)

const typeormCompanyRepository = new CompanyRepository(
  dataSource.getRepository(CompanyORM)
)

const createCompanyStatusUseCase = new CreateCompanyStatusUseCase(
  typeormCompanyStatusRepository,
  typeormPlatformPlanRepository,
  typeormCompanyRepository
) 

const createCompanyStatusController = new CreateCompanyStatusController(
  createCompanyStatusUseCase
)

export { createCompanyStatusController, createCompanyStatusUseCase }