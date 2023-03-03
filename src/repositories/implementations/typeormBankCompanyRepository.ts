import { BankCompany } from "../entities/BankCompany"

export interface IBankCompanyRepository {
  findById(id: string): Promise<BankCompany>
  findByBank(bank: number): Promise<Array<BankCompany>>
  findByCPF(cpf: number): Promise<Array<BankCompany>>
  findByCNPJ(cnpj: number): Promise<Array<BankCompany>>
  findByAgency(agencia: number): Promise<Array<BankCompany>>
  findByAccount(account: number): Promise<Array<BankCompany>> 
  findByPix(pix: string): Promise<BankCompany>
  findByIdCompany(idCompany: string): Promise<Array<BankCompany>>
  insert(bankCompany: BankCompany): Promise<void>
  update(bankCompany: BankCompany): Promise<void>
}