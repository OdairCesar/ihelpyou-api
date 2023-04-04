import { IServiceAnalysisRepository } from "../../../repositories/IServiceAnalysisRepository";
import { ServiceAnalysis } from "../../../entities/ServiceAnalysis";
import { IReadServiceAnalysisRequestDTO } from "./ReadServiceAnalysisDTO";

export class ReadServiceAnalysisUseCase {
  constructor (
    private serviceAnalysisRepository: IServiceAnalysisRepository,
  ) {}

  async execute(data: IReadServiceAnalysisRequestDTO) {
    let serviceAnalysis: ServiceAnalysis[]

    if (data.id) {
      serviceAnalysis.push(await this.serviceAnalysisRepository.findById(data.id))
    } else if (data.idService) {
      serviceAnalysis = await this.serviceAnalysisRepository.findByIdService(data.idService)
    } 

    if (serviceAnalysis) return serviceAnalysis

    throw new Error('Não houve resultado nas buscas')
  }
}