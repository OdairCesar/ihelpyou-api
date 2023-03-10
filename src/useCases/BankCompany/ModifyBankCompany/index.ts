import { dataSource } from "../../../../ormconfig";
import { BankCompanyORM } from "../../../database/typeorm/entity/BankCompanyORM";
import { BankCompanyRepository } from "../../../repositories/implementations/typeorm/BankCompanyRepository";
import { ModifyBankCompanyController } from "./ModifyBankCompanyController";
import { ModifyBankCompanyUseCase } from "./ModifyBankCompanyUseCase";

const typeormBankCompanyRepository = new BankCompanyRepository(
  dataSource.getRepository(BankCompanyORM)
)

const modifyBankCompanyUseCase = new ModifyBankCompanyUseCase(
  typeormBankCompanyRepository
) 

const modifyBankCompanyController = new ModifyBankCompanyController(
  modifyBankCompanyUseCase
)

export { modifyBankCompanyController, modifyBankCompanyUseCase }