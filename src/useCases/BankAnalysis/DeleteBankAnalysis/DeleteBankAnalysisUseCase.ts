import { IBankAnalysisRepository } from "../../../repositories/IBankAnalysisRepository";

export class DeleteBankAnalysisUseCase {
  constructor (
    private bankAnalysisRepository: IBankAnalysisRepository
  ) { }

  async execute(data: IBankAnalysisRequestDTO) {
    const bankAnalysis = await this.bankAnalysisRepository.findById(data.id)

    if (!bankAnalysis){
      throw Error('Não foi possivel deletar essa analise')
    }

    await this.bankAnalysisRepository.delete(bankAnalysis)
  }
}