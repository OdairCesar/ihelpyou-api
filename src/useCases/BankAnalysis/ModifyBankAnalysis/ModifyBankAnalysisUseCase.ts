import { IBankAnalysisRepository } from "../../../repositories/IBankAnalysisRepository";
import { IModifyBankAnalysisRequestDTO } from "./ModifyBankAnalysisDTO";

export class ModifyBankAnalysisUseCase {
  constructor(private bankAnalysisRepository: IBankAnalysisRepository) {}

  async execute(id: string, data: IModifyBankAnalysisRequestDTO) {
    const bankAnalysis = await this.bankAnalysisRepository.findById(id);

    if (!bankAnalysis) {
      throw Error("Id informado é invalido");
    }

    if (data.maxinum) {
      bankAnalysis.maximum = data.maxinum;
    }
    if (data.mininum) {
      bankAnalysis.minimum = data.mininum;
    }
    if (data.avgDay) {
      bankAnalysis.avgDay = data.avgDay;
    }
    if (data.avgWeek) {
      bankAnalysis.avgWeek = data.avgWeek;
    }
    if (data.avgService) {
      bankAnalysis.avgService = data.avgService;
    }

    await this.bankAnalysisRepository.update(bankAnalysis);
  }
}
