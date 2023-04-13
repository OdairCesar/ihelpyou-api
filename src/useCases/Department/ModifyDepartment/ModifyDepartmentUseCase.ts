import { IDepartmentRepository } from "../../../repositories/IDepartmentRepository";
import { IModifyDepartmentRequestDTO } from "./ModifyDepartmentDTO"

export class ModifyDepartmentUseCase {
  constructor(
    private departmentRepository: IDepartmentRepository
  ) { }

  async execute(data: IModifyDepartmentRequestDTO) {
    const line = await this.departmentRepository.findById(data.id)

    if (!line) {
      throw new Error('O departamento informato não existe')
    }

    if (data.name) line.name = data.name;
    if (data.description) line.description = data.description
    if (data.image) line.image = data.image

    await this.departmentRepository.update(line)
  }
}