import { Department } from "../entities/Department"

export interface IDepartmentRepository {
  findById(id: string): Promise<Department>
  findByName(name: string): Promise<Array<Department>>
  insert(department: Department): Promise<void>
  update(department: Department): Promise<void>
  delete(department: Department): Promise<void>
}