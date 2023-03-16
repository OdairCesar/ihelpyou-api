import { ICompanyRepository } from "../../../repositories/ICompanyRepository";
import { IServiceRepository } from "../../../repositories/IServiceRepository";
import { IDepartmentRepository } from "../../../repositories/IDepartmentRepository";
import { IModifyServiceRequestDTO } from "./ModifyServiceDTO"

export class ModifyServiceUseCase {
  constructor(
    private serviceRepository: IServiceRepository,
    private departmentRepository: IDepartmentRepository,
    private companyRepository: ICompanyRepository
  ) { }

  async execute(data: IModifyServiceRequestDTO) {
    const line = await this.serviceRepository.findById(data.id)

    if (!line) {
      throw Error('O serviço informato não existe')
    }

    if (data.idDepartment) {
      const department = this.departmentRepository.findById(data.idDepartment)

      if (!department) {
        throw Error('Departamento informato não existe')
      }

      line.idDepartment = data.idDepartment;
    }

    if (data.idCompany) {
      const company = this.companyRepository.findById(data.idCompany)
      
      if (!company) {
        throw Error('Empresa informato não existe')
      }

      line.idCompany = data.idCompany;
    }

    if (data.name) line.name = data.name;
    if (data.description) line.description = data.description;
    if (data.minTime) line.minTime = data.minTime;
    if (data.maxTime) line.maxTime = data.maxTime;
    if (data.image) line.image = data.image;
    if (data.value) line.value = data.value;

    await this.serviceRepository.update(line);
  }
}