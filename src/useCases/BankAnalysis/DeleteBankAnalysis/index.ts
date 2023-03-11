import { dataSource } from "../../../../ormconfig";
import { BankAnalysisORM } from "../../../database/typeorm/entity/BankAnalysisORM";
import { BankAnalysisRepository } from "../../../repositories/implementations/typeorm/BankAnalysisRepository";
import { DeleteBankAnalysisController } from "./DeleteBankAnalysisController";
import { DeleteBankAnalysisUseCase } from "./DeleteBankAnalysisUseCase";


const typeormBankAnalysisRepository = new BankAnalysisRepository(
  dataSource.getRepository(BankAnalysisORM)
)

const deleteBankAnalysisUseCase = new DeleteBankAnalysisUseCase(
  typeormBankAnalysisRepository,
)

const deleteBankAnalysisController = new DeleteBankAnalysisController(
  deleteBankAnalysisUseCase
)

export { deleteBankAnalysisUseCase, deleteBankAnalysisController }