import { IDepartmentRepository } from "../../../repositories/IDepartmentRepository";
import { Department } from "../../../entities/Department";
import { IReadDepartmentRequestDTO } from "./ReadDepartmentDTO";

export class ReadDepartmentUseCase {
  constructor (
    private departmentRepository: IDepartmentRepository,
  ) {}

  async execute(data: IReadDepartmentRequestDTO) {
    let department: Department[] = []

    if (data.id) {
      department.push(await this.departmentRepository.findById(data.id))
    } else if (data.name) {
      department = await this.departmentRepository.findByName(data.name)
    } else {
      department = await this.departmentRepository.findAll()
    }

    if (department.length > 0) return department

    throw new Error('Não houve resultado nas buscas')
  }
}