import { IServiceRepository } from "../../../repositories/IServiceRepository";
import { IDepartmentRepository } from "../../../repositories/IDepartmentRepository";
import { IModifyServiceRequestDTO } from "./ModifyServiceDTO"

export class ModifyServiceUseCase {
  constructor(
    private serviceRepository: IServiceRepository,
    private departmentRepository: IDepartmentRepository,
  ) { }

  async execute(data: IModifyServiceRequestDTO) {
    const line = await this.serviceRepository.findById(data.id)

    if (!line) {
      throw Error('O serviço informato não existe')
    }

    if (data.idDepartment) {
      const department = await this.departmentRepository.findById(data.idDepartment)

      if (!department) throw new Error('Departamento informato não existe');
      else line.idDepartment = data.idDepartment;
    }

    if (data.name) line.name = data.name;
    if (data.description) line.description = data.description;
    if (data.minTimeInDay) line.minTimeInDay = data.minTimeInDay;
    if (data.maxTimeInDay) line.maxTimeInDay = data.maxTimeInDay;
    if (data.image) line.image = data.image;
    if (data.value) line.value = data.value;

    await this.serviceRepository.update(line);
  }
}