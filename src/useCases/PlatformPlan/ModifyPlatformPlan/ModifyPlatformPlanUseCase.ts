import { IPlatformPlanRepository } from "../../../repositories/IPlatformPlanRepository";
import { IModifyPlatformPlanRequestDTO } from "./ModifyPlatformPlanDTO"

export class ModifyPlatformPlanUseCase {
  constructor(
    private platformPlanRepository: IPlatformPlanRepository
  ) { }

  async execute(data: IModifyPlatformPlanRequestDTO) {
    const line = await this.platformPlanRepository.findById(data.id)

    if (!line) {
      throw Error('A avaliação de pedido informato, não existe')
    }

    if (data.name) line.name = data.name;
    if (data.description) line.description = data.description;
    if (data.periodInMonth) line.periodInMonth = data.periodInMonth;
    if (data.limit) line.limit = data.limit;
    if (data.value) line.value = data.value;

    await this.platformPlanRepository.update(line)
  }
}