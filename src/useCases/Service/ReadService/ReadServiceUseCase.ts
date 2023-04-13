import { IServiceRepository } from "../../../repositories/IServiceRepository";
import { Service } from "../../../entities/Service";
import { IReadServiceRequestDTO } from "./ReadServiceDTO";

export class ReadServiceUseCase {
  constructor (
    private serviceRepository: IServiceRepository,
  ) {}

  async execute(data: IReadServiceRequestDTO) {
    let services: Service[] = []

    if (data.id) {
      services.push(await this.serviceRepository.findById(data.id))
    } else if (data.name) {
      services = await this.serviceRepository.findByName(data.name)
    } else if (data.description) {
      services = await this.serviceRepository.findByDescription(data.description)
    } else if (data.minTimeInDay) {
      services = await this.serviceRepository.findByMinimumTime(data.minTimeInDay)
    } else if (data.maxTimeInDay) {
      services = await this.serviceRepository.findByMaximumTime(data.maxTimeInDay)
    } else if (data.idDepartment) {
      services = await this.serviceRepository.findByIdDepartment(data.idDepartment)
    } else if (data.id) {
      services = await this.serviceRepository.findByIdCompany(data.idCompany)
    }

    if (services.length > 0) return services

    throw new Error('Não houve resultado nas buscas')
  }
}