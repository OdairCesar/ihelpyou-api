import { dataSource } from "../../../../ormconfig";
import { CompanyStatusORM } from "../../../database/typeorm/entity/CompanyStatusORM";
import { CompanyStatusRepository } from "../../../repositories/implementations/typeorm/CompanyStatusRepository";
import { ReadCompanyStatusController } from "./ReadCompanyStatusController";
import { ReadCompanyStatusUseCase } from "./ReadCompanyStatusUseCase";


const typeormCompanyStatusRepository = new CompanyStatusRepository(
  dataSource.getRepository(CompanyStatusORM)
)

const readCompanyStatusUseCase = new ReadCompanyStatusUseCase(
  typeormCompanyStatusRepository,
)

const readCompanyStatusController = new ReadCompanyStatusController(
  readCompanyStatusUseCase
)

export { readCompanyStatusUseCase, readCompanyStatusController }