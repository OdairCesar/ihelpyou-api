import { IReadBankAnalysisRequestDTO } from "./ReadBankAnalysisDTO";
import { IBankAnalysisRepository } from "../../../repositories/IBankAnalysisRepository";
import { BankAnalysis } from "../../../entities/BankAnalysis";

export class ReadBankAnalysisUseCase {
  constructor (
    private bankAnalysisRepository: IBankAnalysisRepository,
  ) {}

  async execute(data: IReadBankAnalysisRequestDTO) {
    let bankAnalyzes: BankAnalysis[]

    if (data.id) {
      bankAnalyzes.push(await this.bankAnalysisRepository.findById(data.id))
    } else if (data.mininum) {
      bankAnalyzes = await this.bankAnalysisRepository.findByMinimum(data.mininum)
    } else if (data.maxinum) {
      bankAnalyzes = await this.bankAnalysisRepository.findByMaximum(data.maxinum)
    } else if (data.idBank) {
      bankAnalyzes = await this.bankAnalysisRepository.findByIdBankCompany(data.idBank)
    }

    if (bankAnalyzes) return bankAnalyzes

    throw new Error('Não houve resultado nas buscas')
  }
}