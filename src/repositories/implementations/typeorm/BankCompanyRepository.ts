import { IBankCompanyRepository } from "../../IBankCompanyRepository";
import { BankCompany } from "../../../entities/BankCompany"
import { Repository } from "typeorm";
import { BankCompanyORM } from "../../../database/typeorm/entity/BankCompanyORM";

export class BankCompanyRepository implements IBankCompanyRepository {

  constructor (
    private bankCompanyRepository: Repository<BankCompanyORM>
  ) { }


  async findById(id: string): Promise<BankCompany> {
    return await this.bankCompanyRepository.findOneBy({
      id: id
    })
  }


  async findByBank(bank: number): Promise<Array<BankCompany>> {
    return await this.bankCompanyRepository.findBy({
      bank: bank
    })
  }


  async findByCPF(cpf: number): Promise<Array<BankCompany>> {
    return await this.bankCompanyRepository.findBy({
      cpf: cpf
    })
  }


  async findByCNPJ(cnpj: number): Promise<Array<BankCompany>> {
    return await this.bankCompanyRepository.findBy({
      cnpj: cnpj
    })
  }


  async findByAgency(agency: number): Promise<Array<BankCompany>> {
    return await this.bankCompanyRepository.findBy({
      agency: agency
    })
  }


  async findByAccount(account: number): Promise<Array<BankCompany>> {
    return await this.bankCompanyRepository.findBy({
      account: account
    })
  }


  async findByPix(pix: string): Promise<BankCompany> {
    return await this.bankCompanyRepository.findOneBy({
      pix: pix
    })
  }


  async findByIdCompany(idCompany: any): Promise<Array<BankCompany>> {
    return await this.bankCompanyRepository.findBy({
      idCompany: {
        id: idCompany
      }
    })
  }


  async insert(bankCompany: BankCompany): Promise<void> {
    await this.bankCompanyRepository.insert(bankCompany)
  }


  async update(bankCompany: BankCompany): Promise<void> {
    if (typeof bankCompany.id === 'string') this.bankCompanyRepository.update({ id: bankCompany.id }, bankCompany)
  }

  async delete(bankCompany: BankCompany): Promise<void> {
    this.bankCompanyRepository.delete(bankCompany)  
  }


}