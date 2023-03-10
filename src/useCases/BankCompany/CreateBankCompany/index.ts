import { dataSource } from "../../../../ormconfig";
import { BankCompanyORM } from "../../../database/typeorm/entity/BankCompanyORM";
import { BankCompanyRepository } from "../../../repositories/implementations/typeorm/BankCompanyRepository";
import { CreateBankCompanyController } from "./CreateBankCompanyController";
import { CreateBankCompanyUseCase } from "./CreateBankCompanyUseCase";

const bankCompanyRepository = new BankCompanyRepository(
  dataSource.getRepository(BankCompanyORM)
)

const createBankCompanyUseCase = new CreateBankCompanyUseCase(
  bankCompanyRepository
) 

const createBankCompanyController = new CreateBankCompanyController(
  createBankCompanyUseCase
)

export { createBankCompanyController, createBankCompanyUseCase }