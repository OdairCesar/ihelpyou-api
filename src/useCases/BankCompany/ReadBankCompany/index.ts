import { dataSource } from "../../../../ormconfig";
import { BankCompanyORM } from "../../../database/typeorm/entity/BankCompanyORM";
import { BankCompanyRepository } from "../../../repositories/implementations/typeorm/BankCompanyRepository";
import { ReadBankCompanyController } from "./ReadBankCompanyController";
import { ReadBankCompanyUseCase } from "./ReadBankCompanyUseCase";


const typeormBankCompanyRepository = new BankCompanyRepository(
  dataSource.getRepository(BankCompanyORM)
)

const readBankCompanyUseCase = new ReadBankCompanyUseCase(
  typeormBankCompanyRepository,
)

const readBankCompanyController = new ReadBankCompanyController(
  readBankCompanyUseCase
)

export { readBankCompanyUseCase, readBankCompanyController }