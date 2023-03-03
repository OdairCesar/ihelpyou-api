import { BankAnalysis } from "../../entities/BankAnalysis"

export interface IBankAnalysisRepository {
  findById(id: string): Promise<BankAnalysis>
  findByMaximum(maximum: number): Promise<Array<BankAnalysis>>
  findByMinimum(minimum: number): Promise<Array<BankAnalysis>>
  findByIdBankCompany(idBankCompany: string): Promise<Array<BankAnalysis>>
  insert(bankAnalysis: BankAnalysis): Promise<void>
  update(bankAnalysis: BankAnalysis): Promise<void>
}