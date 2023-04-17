import { ServiceAnalysis } from "../../../entities/ServiceAnalysis";
import { IServiceAnalysisRepository } from "../../../repositories/IServiceAnalysisRepository";
import { IServiceRepository } from "../../../repositories/IServiceRepository";
import { ICreateServiceAnalysisRequestDTO } from "./CreateServiceAnalysisDTO"

export class CreateServiceAnalysisUseCase {
  constructor(
    private ServiceAnalysisRepository: IServiceAnalysisRepository,
    private serviceRepository: IServiceRepository
  ) { }

  async execute(data: ICreateServiceAnalysisRequestDTO) {
    const service = await this.serviceRepository.findById(data.idService);
    const serviceAnalysis = await this.ServiceAnalysisRepository.findByDate(data.date)

    if (serviceAnalysis) throw new Error('Já existe uma analise nesse intervalo de tempo');
    if (!service) throw new Error('Não foi possivel encontrar o serviço informato');

    const newServiceAnalysis = new ServiceAnalysis(data);

    await this.ServiceAnalysisRepository.insert(newServiceAnalysis)
  }
}