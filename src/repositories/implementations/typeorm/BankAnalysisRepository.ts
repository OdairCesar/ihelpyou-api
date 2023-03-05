import { LessThanOrEqual, MoreThanOrEqual, Repository } from "typeorm";
import { BankAnalysis } from "../../../entities/BankAnalysis"
import { IBankAnalysisRepository } from "../../IBankAnalysisRepository";
import { BankAnalysisORM } from "../../../database/typeorm/entity/BankAnalysisORM";

export class BankAnalysisRepository implements IBankAnalysisRepository {

  constructor (
    private bankAnalysisRepository: Repository<BankAnalysisORM>
  ) { }


  async findById(id: string): Promise<BankAnalysis> {
    return await this.bankAnalysisRepository.findOneBy({
      id: id
    })
  }


  async findByMaximum(maximum: number): Promise<Array<BankAnalysis>> {
    return await this.bankAnalysisRepository.findBy({
      maximum: LessThanOrEqual(maximum),
    })
  }


  async findByMinimum(minimum: number): Promise<Array<BankAnalysis>> {
    return await this.bankAnalysisRepository.findBy({
      minimum: MoreThanOrEqual(minimum),
    })
  }


  async findByIdBankCompany(idBankCompany: string): Promise<Array<BankAnalysis>> {
    return await this.bankAnalysisRepository.findBy({
      idBank: {
        id: idBankCompany
      }
    })
  }


  async insert(bankAnalysis: BankAnalysis): Promise<void> {
    await this.bankAnalysisRepository.insert(bankAnalysis)
  }


  async update(bankAnalysis: BankAnalysis): Promise<void> {
    if (typeof bankAnalysis.id === 'string') this.bankAnalysisRepository.update({ id: bankAnalysis.id }, bankAnalysis)
  }
}