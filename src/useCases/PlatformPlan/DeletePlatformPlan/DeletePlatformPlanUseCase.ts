import { IPlatformPlanRepository } from "../../../repositories/IPlatformPlanRepository";

export class DeletePlatformPlanUseCase {
  constructor (
    private PlatformPlanRepository: IPlatformPlanRepository
  ) { }

  async execute(data: IPlatformPlanRequestDTO) {
    const platformPlan = await this.PlatformPlanRepository.findById(data.id)

    if (!platformPlan){
      throw Error('Não foi possivel deletar essa analise')
    }

    await this.PlatformPlanRepository.delete(platformPlan)
  }
}