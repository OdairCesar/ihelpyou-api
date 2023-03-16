import { Service } from "../../../entities/Service";
import { IDepartmentRepository } from "../../../repositories/IDepartmentRepository";
import { IServiceRepository } from "../../../repositories/IServiceRepository";
import { ICompanyRepository } from "../../../repositories/ICompanyRepository";
import { ICreateServiceRequestDTO } from "./CreateServiceDTO";

export class CreateServiceUseCase {
  constructor(
    private serviceRepository: IServiceRepository,
    private departmentRepository: IDepartmentRepository,
    private companyRepository: ICompanyRepository
  ) {}

  async execute(data: ICreateServiceRequestDTO) {
    const company = this.companyRepository.findById(data.idCompany);
    const department = this.departmentRepository.findById(data.idDepartment);

    if (!department) {
      throw Error("Não foi possivel encontrar o departamento do serviço");
    }

    if (!company) {
      throw Error("Não foi possivel encontrar a empresa do serviço");
    }

    const service = new Service(data)

    this.serviceRepository.insert(service);
  }
}
