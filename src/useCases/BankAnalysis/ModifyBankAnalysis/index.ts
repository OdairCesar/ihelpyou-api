import { dataSource } from "../../../../ormconfig";
import { BankAnalysisORM } from "../../../database/typeorm/entity/BankAnalysisORM";
import { BankAnalysisRepository } from "../../../repositories/implementations/typeorm/BankAnalysisRepository";
import { ModifyBankAnalysisController } from "./ModifyBankAnalysisController";
import { ModifyBankAnalysisUseCase } from "./ModifyBankAnalysisUseCase";


const typeormBankAnalysisRepository = new BankAnalysisRepository(
  dataSource.getRepository(BankAnalysisORM)
)

const modifyBankAnalysisUseCase = new ModifyBankAnalysisUseCase(
  typeormBankAnalysisRepository,
)

const modifyBankAnalysisController = new ModifyBankAnalysisController(
  modifyBankAnalysisUseCase
)

export { modifyBankAnalysisUseCase, modifyBankAnalysisController }