import { Department } from "../../../entities/Department";
import { IDepartmentRepository } from "../../../repositories/IDepartmentRepository";
import { ICreateDepartmentRequestDTO } from "./CreateDepartmentDTO"

export class CreateDepartmentUseCase {
  constructor(
    private departmentRepository: IDepartmentRepository
  ) { }

  async execute(data: ICreateDepartmentRequestDTO) {
    const department = this.departmentRepository.findById(data.id)

    if (department) {
      throw Error('Esse departamento já existe')
    }

    const newDepartment = new Department(data)

    this.departmentRepository.insert(newDepartment)
  }
}