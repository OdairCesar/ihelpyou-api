import { dataSource } from "../../../../ormconfig";
import { CompanyORM } from "../../../database/typeorm/entity/CompanyORM";
import { CompanyStatusORM } from "../../../database/typeorm/entity/CompanyStatusORM";
import { CompanyRepository } from "../../../repositories/implementations/typeorm/CompanyRepository";
import { CompanyStatusRepository } from "../../../repositories/implementations/typeorm/CompanyStatusRepository";
import { ModifyCompanyController } from "./ModifyCompanyController";
import { ModifyCompanyUseCase } from "./ModifyCompanyUseCase";

const typeormCompanyRepository = new CompanyRepository(
  dataSource.getRepository(CompanyORM)
)

const typeormCompanyStatusRepository = new CompanyStatusRepository(
  dataSource.getRepository(CompanyStatusORM)
)

const modifyCompanyUseCase = new ModifyCompanyUseCase(
  typeormCompanyRepository,
  typeormCompanyStatusRepository
) 

const modifyCompanyController = new ModifyCompanyController(
  modifyCompanyUseCase
)

export { modifyCompanyController, modifyCompanyUseCase }