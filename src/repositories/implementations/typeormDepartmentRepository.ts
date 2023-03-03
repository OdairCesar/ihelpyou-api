import { Department } from "../entities/Department"

export interface IDepartmentRepository {
  findById(id: string): Promise<Department>
  findByName(name: string): Promise<Department>
  insert(department: Department): Promise<void>
  update(department: Department): Promise<void>
}