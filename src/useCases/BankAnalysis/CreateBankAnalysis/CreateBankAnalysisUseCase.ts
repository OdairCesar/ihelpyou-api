import { BankAnalysis } from "../../../entities/BankAnalysis";
import { IBankAnalysisRepository } from "../../../repositories/IBankAnalysisRepository";
import { IBankCompanyRepository } from "../../../repositories/IBankCompanyRepository";
import { ICreateBankAnalysisRequestDTO } from "./CreateBankAnalysisDTO";

export class CreateBankAnalysisUseCase {
  constructor (
    private bankAnalysisRepository: IBankAnalysisRepository,
    private bankCompany: IBankCompanyRepository
  ) {}

  async execute(data: ICreateBankAnalysisRequestDTO ) {
    const dateEnd = new Date()

    const bankAnalysis = await this.bankAnalysisRepository.findByDateStartMonth(dateEnd);
    const bank = await this.bankCompany.findById(data.idBank)

    if (!bank) throw new Error('Banco informato não existe');

    if (bankAnalysis.length > 0) {
      bankAnalysis.forEach(bank => {
        if (bank.idBank == bank.idBank) throw new Error('Tabela de analise de banco já existe');
      })
    }

    const newBankAnalysis = new BankAnalysis({
      idBank: data.idBank,
      dateStart: dateEnd
    })

    await this.bankAnalysisRepository.insert(newBankAnalysis)
  }
}