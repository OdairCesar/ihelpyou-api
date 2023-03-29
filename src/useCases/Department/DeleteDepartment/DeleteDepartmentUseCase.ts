import { IDepartmentRepository } from "../../../repositories/IDepartmentRepository";

export class DeleteDepartmentUseCase {
  constructor (
    private departmentRepository: IDepartmentRepository
  ) { }

  async execute(data: IDepartmentRequestDTO) {
    const department = await this.departmentRepository.findById(data.id)

    if (!department){
      throw Error('Não foi possivel deletar essa analise')
    }

    await this.departmentRepository.delete(department)
  }
}