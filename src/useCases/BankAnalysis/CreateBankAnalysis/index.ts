import { dataSource } from "../../../../ormconfig";
import { BankAnalysisORM } from "../../../database/typeorm/entity/BankAnalysisORM";
import { BankAnalysisRepository } from "../../../repositories/implementations/typeorm/BankAnalysisRepository";
import { CreateBankAnalysisController } from "./CreateBankAnalysisController";
import { CreateBankAnalysisUseCase } from "./CreateBankAnalysisUseCase";


const typeormBankAnalysisRepository = new BankAnalysisRepository(
  dataSource.getRepository(BankAnalysisORM)
)

const createBankAnalysisUseCase = new CreateBankAnalysisUseCase(
  typeormBankAnalysisRepository,
)

const createBankAnalysisController = new CreateBankAnalysisController(
  createBankAnalysisUseCase
)

export { createBankAnalysisUseCase, createBankAnalysisController }