import { IServiceRepository } from "../../../repositories/IServiceRepository";

export class DeleteServiceUseCase {
  constructor (
    private serviceRepository: IServiceRepository
  ) { }

  async execute(data: IDeleteServiceRequestDTO) {
    const service = await this.serviceRepository.findById(data.id)

    if (!service){
      throw Error('Não foi possivel deletar esse serviço')
    }

    await this.serviceRepository.delete(service)
  }
}