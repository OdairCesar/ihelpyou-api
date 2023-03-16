import { LessThanOrEqual, Like, MoreThanOrEqual, Repository } from "typeorm";
import { Service } from "../../../entities/Service"
import { IServiceRepository } from "../../IServiceRepository";
import { ServiceORM } from "../../../database/typeorm/entity/ServiceORM";

export class ServiceRepository implements IServiceRepository {

  constructor (
    private serviceRepository: Repository<ServiceORM>
  ) { }


  async findById(id: string): Promise<Service> {
    return await this.serviceRepository.findOneBy({
      id: id,
    })
  }
  

  async findByName(name: string): Promise<Array<Service>> {
    return await this.serviceRepository.findBy({
      name: Like(`%${name}%`),
    })
  }
  

  async findByDescription(description: string): Promise<Array<Service>> {
    return await this.serviceRepository.findBy({
      description: Like(`%${description}%`),
    })
  }
  

  async findByMinimumTime(minimumTime: string): Promise<Array<Service>> {
    return await this.serviceRepository.findBy({
      minTime: MoreThanOrEqual(minimumTime),
    })
  }
  

  async findByMaximumTime(maximumTime: string): Promise<Array<Service>> {
    return await this.serviceRepository.findBy({
      maxTime: LessThanOrEqual(maximumTime),
    })
  }
  

  async findByValue(value: number): Promise<Array<Service>> {
    return await this.serviceRepository.findBy({
      value: value,
    })
  }
  

  async findByIdServiceAnalysis(idServiceAnalysis: string): Promise<Service> {
    return await this.serviceRepository.findOneBy({
      serviceAnalyzes: {
        id: idServiceAnalysis
      },
    })
  }
  

  async findByIdDepartment(idDepartment: string): Promise<Array<Service>> {
    return await this.serviceRepository.findBy({
      idDepartment: {
        id: idDepartment
      },
    })
  }
  

  async findByIdCompany(idCompany: string): Promise<Array<Service>> {
    return await this.serviceRepository.findBy({
      idCompany: {
        id: idCompany
      }
    })
  }
  

  async insert(service: Service): Promise<void> {
    await this.serviceRepository.insert(service)
  }
  

  async update(service: Service): Promise<void> {
    if (typeof service.id === 'string') this.serviceRepository.update({ id: service.id }, service)
  }
  

  async delete(service: Service): Promise<void> {
    if (typeof service.id === 'string') this.serviceRepository.delete(service)
  }
  

}