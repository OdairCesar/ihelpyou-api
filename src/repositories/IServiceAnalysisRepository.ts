import { ServiceAnalysis } from "../entities/ServiceAnalysis"

export interface IServiceAnalysisRepository {
  findById(id: string): Promise<ServiceAnalysis>
  findByViewsMax(views: number): Promise<Array<ServiceAnalysis>>
  findByViewsMin(views: number): Promise<Array<ServiceAnalysis>>
  findByIdService(idService: string): Promise<Array<ServiceAnalysis>>
  insert(serviceAnalysis: ServiceAnalysis): Promise<void>
  update(serviceAnalysis: ServiceAnalysis): Promise<void>
}