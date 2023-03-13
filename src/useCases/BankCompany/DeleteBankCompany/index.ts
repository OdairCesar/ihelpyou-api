import { dataSource } from "../../../../ormconfig";
import { BankCompanyORM } from "../../../database/typeorm/entity/BankCompanyORM";
import { BankCompanyRepository } from "../../../repositories/implementations/typeorm/BankCompanyRepository";
import { DeleteBankCompanyController } from "./DeleteBankCompanyController";
import { DeleteBankCompanyUseCase } from "./DeleteBankCompanyUseCase";


const typeormBankCompanyRepository = new BankCompanyRepository(
  dataSource.getRepository(BankCompanyORM)
)

const deleteBankCompanyUseCase = new DeleteBankCompanyUseCase(
  typeormBankCompanyRepository,
)

const deleteBankCompanyController = new DeleteBankCompanyController(
  deleteBankCompanyUseCase
)

export { deleteBankCompanyUseCase, deleteBankCompanyController }