import { BankAnalysis } from "../../../entities/BankAnalysis";
import { IBankAnalysisRepository } from "../../../repositories/IBankAnalysisRepository";
import { ICreateBankAnalysisRequestDTO } from "./CreateBankAnalysisDTO";

export class CreateBankAnalysisUseCase {
  constructor (
    private bankAnalysisRepository: IBankAnalysisRepository,
  ) {}

  async execute(data: ICreateBankAnalysisRequestDTO ) {
    const dateEnd = new Date()

    const bankAnalysis = await this.bankAnalysisRepository.findByDateStartMonth(dateEnd)

    if (bankAnalysis){
      throw Error('Tabela de analise de banco já existe')
    }

    const newBankAnalysis = new BankAnalysis({
      idBank: data.idBank,
      dateStart: dateEnd
    })

    await this.bankAnalysisRepository.insert(newBankAnalysis)
  }
}