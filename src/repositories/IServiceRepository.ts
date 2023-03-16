import { Service } from "../entities/Service"

export interface IServiceRepository {
  findById(id: string): Promise<Service>
  findByName(name: string): Promise<Array<Service>>
  findByDescription(description: string): Promise<Array<Service>>
  findByMinimumTime(minimumTime: string): Promise<Array<Service>>
  findByMaximumTime(maximumTime: string): Promise<Array<Service>>
  findByIdDepartment(idDepartment: string): Promise<Array<Service>>
  findByIdCompany(idCompany: string): Promise<Array<Service>>
  insert(Service: Service): Promise<void>
  update(Service: Service): Promise<void>
  delete(Service: Service): Promise<void>
}