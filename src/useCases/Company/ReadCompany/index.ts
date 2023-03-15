import { dataSource } from "../../../../ormconfig";
import { CompanyORM } from "../../../database/typeorm/entity/CompanyORM";
import { CompanyRepository } from "../../../repositories/implementations/typeorm/CompanyRepository";
import { ReadCompanyController } from "./ReadCompanyController";
import { ReadCompanyUseCase } from "./ReadCompanyUseCase";

const typeormCompanyRepository = new CompanyRepository(
  dataSource.getRepository(CompanyORM)
)

const readCompanyUseCase = new ReadCompanyUseCase(
  typeormCompanyRepository,
)

const readCompanyController = new ReadCompanyController(
  readCompanyUseCase
)

export { readCompanyUseCase, readCompanyController }