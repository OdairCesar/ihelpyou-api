import { IServiceAnalysisRepository } from "../../IServiceAnalysisRepository";
import { ServiceAnalysis } from "../../../entities/ServiceAnalysis"
import { LessThanOrEqual, MoreThanOrEqual, Repository } from "typeorm";
import { ServiceAnalysisORM } from "../../../database/typeorm/entity/ServiceAnalysisORM";

export class ServiceAnalysisRepository implements IServiceAnalysisRepository {

  constructor(
    private serviceAnalysisRepository: Repository<ServiceAnalysisORM>
  ) { }


  async findById(id: string): Promise<ServiceAnalysis> {
    return await this.serviceAnalysisRepository.findOneBy({
      id: id
    })
  }
  

  async findByViewsMax(views: number): Promise<Array<ServiceAnalysis>> {
    return await this.serviceAnalysisRepository.findBy({
      views: MoreThanOrEqual(views)
    })
  }
  

  async findByViewsMin(views: number): Promise<Array<ServiceAnalysis>> {
    return await this.serviceAnalysisRepository.findBy({
      views: LessThanOrEqual(views)
    })
  }
  

  async insert(serviceAnalysis: ServiceAnalysis): Promise<void> {
    await this.serviceAnalysisRepository.insert(serviceAnalysis)
  }
  

  async update(serviceAnalysis: ServiceAnalysis): Promise<void> {
    if (typeof serviceAnalysis.id === 'string') this.serviceAnalysisRepository.update({ id: serviceAnalysis.id }, serviceAnalysis)
  }
  

} 