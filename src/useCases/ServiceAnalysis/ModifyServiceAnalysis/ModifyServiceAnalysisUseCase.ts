import { IServiceAnalysisRepository } from "../../../repositories/IServiceAnalysisRepository";
import { IModifyServiceAnalysisRequestDTO } from "./ModifyServiceAnalysisDTO"

export class ModifyServiceAnalysisUseCase {
  constructor(
    private serviceAnalysisRepository: IServiceAnalysisRepository
  ) { }

  async execute(data: IModifyServiceAnalysisRequestDTO) {
    const line = await this.serviceAnalysisRepository.findById(data.id)

    if (!line) {
      throw Error('A avaliação de pedido informato, não existe')
    }

    if (data.amountAvgDay) line.amountAvgDay = data.amountAvgDay;
    if (data.amountAvgWeek) line.amountAvgWeek = data.amountAvgWeek;
    if (data.amountAvgMonth) line.amountAvgMonth = data.amountAvgMonth;
    if (data.timeMdPerUser) line.timeMdPerUser = data.timeMdPerUser;
    if (data.views) line.views = data.views;
    if (data.purchaseCancelled) line.purchaseCancelled = data.purchaseCancelled;

    await this.serviceAnalysisRepository.update(line)
  }
}