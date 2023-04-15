import { dataSource } from "../../../../ormconfig";
import { BankAnalysisORM } from "../../../database/typeorm/entity/BankAnalysisORM";
import { BankCompanyORM } from "../../../database/typeorm/entity/BankCompanyORM";
import { BankAnalysisRepository } from "../../../repositories/implementations/typeorm/BankAnalysisRepository";
import { BankCompanyRepository } from "../../../repositories/implementations/typeorm/BankCompanyRepository";
import { CreateBankAnalysisController } from "./CreateBankAnalysisController";
import { CreateBankAnalysisUseCase } from "./CreateBankAnalysisUseCase";

const typeormBankCompanyRepository = new BankCompanyRepository(
  dataSource.getRepository(BankCompanyORM)
)

const typeormBankAnalysisRepository = new BankAnalysisRepository(
  dataSource.getRepository(BankAnalysisORM)
)

const createBankAnalysisUseCase = new CreateBankAnalysisUseCase(
  typeormBankAnalysisRepository,
  typeormBankCompanyRepository
)

const createBankAnalysisController = new CreateBankAnalysisController(
  createBankAnalysisUseCase
)

export { createBankAnalysisUseCase, createBankAnalysisController }