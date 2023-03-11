import { dataSource } from "../../../../ormconfig";
import { BankAnalysisORM } from "../../../database/typeorm/entity/BankAnalysisORM";
import { BankAnalysisRepository } from "../../../repositories/implementations/typeorm/BankAnalysisRepository";
import { ReadBankAnalysisController } from "./ReadBankAnalysisController";
import { ReadBankAnalysisUseCase } from "./ReadBankAnalysisUseCase";


const typeormBankAnalysisRepository = new BankAnalysisRepository(
  dataSource.getRepository(BankAnalysisORM)
)

const readBankAnalysisUseCase = new ReadBankAnalysisUseCase(
  typeormBankAnalysisRepository,
)

const readBankAnalysisController = new ReadBankAnalysisController(
  readBankAnalysisUseCase
)

export { readBankAnalysisUseCase, readBankAnalysisController }