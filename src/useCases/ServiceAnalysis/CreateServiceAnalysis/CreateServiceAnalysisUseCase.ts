import { ServiceAnalysis } from "../../../entities/ServiceAnalysis";
import { IServiceAnalysisRepository } from "../../../repositories/IServiceAnalysisRepository";
import { ICreateServiceAnalysisRequestDTO } from "./CreateServiceAnalysisDTO"

export class CreateServiceAnalysisUseCase {
  constructor(
    private ServiceAnalysisRepository: IServiceAnalysisRepository,
  ) { }

  async execute(data: ICreateServiceAnalysisRequestDTO) {
    const serviceAnalysis = new ServiceAnalysis(data)

    this.ServiceAnalysisRepository.insert(serviceAnalysis)
  }
}