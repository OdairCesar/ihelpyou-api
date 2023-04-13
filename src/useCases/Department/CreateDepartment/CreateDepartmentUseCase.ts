import { Department } from "../../../entities/Department";
import { IDepartmentRepository } from "../../../repositories/IDepartmentRepository";
import { ICreateDepartmentRequestDTO } from "./CreateDepartmentDTO"

export class CreateDepartmentUseCase {
  constructor(
    private departmentRepository: IDepartmentRepository
  ) { }

  async execute(data: ICreateDepartmentRequestDTO) {
    const newDepartment = new Department(data)

    await this.departmentRepository.insert(newDepartment)
  }
}