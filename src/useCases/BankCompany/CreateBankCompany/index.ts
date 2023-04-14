import { dataSource } from "../../../../ormconfig";
import { BankCompanyORM } from "../../../database/typeorm/entity/BankCompanyORM";
import { CompanyORM } from "../../../database/typeorm/entity/CompanyORM";
import { BankCompanyRepository } from "../../../repositories/implementations/typeorm/BankCompanyRepository";
import { CompanyRepository } from "../../../repositories/implementations/typeorm/CompanyRepository";
import { CreateBankCompanyController } from "./CreateBankCompanyController";
import { CreateBankCompanyUseCase } from "./CreateBankCompanyUseCase";

const typeormBankCompanyRepository = new BankCompanyRepository(
  dataSource.getRepository(BankCompanyORM)
)

const typeormCompanyRepository = new CompanyRepository(
  dataSource.getRepository(CompanyORM)
)

const createBankCompanyUseCase = new CreateBankCompanyUseCase(
  typeormBankCompanyRepository,
  typeormCompanyRepository
) 

const createBankCompanyController = new CreateBankCompanyController(
  createBankCompanyUseCase
)

export { createBankCompanyController, createBankCompanyUseCase }