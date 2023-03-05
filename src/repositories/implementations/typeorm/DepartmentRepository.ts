import { Repository } from "typeorm";
import { Department } from "../../../entities/Department"
import { DepartmentORM } from "../../../database/typeorm/entity/DepartmentORM";
import { IDepartmentRepository } from "../../IDepartmentRepository";

export class DepartmentRepository implements IDepartmentRepository {

  constructor (
    private departmentRepository: Repository<DepartmentORM>
  ) { }


  async findById(id: string): Promise<Department> {
    return await this.departmentRepository.findOneBy({
      id: id
    })
  }
  

  async findByName(name: string): Promise<Department> {
    return await this.departmentRepository.findOneBy({
      name: name,
    })
  }
  

  async insert(department: Department): Promise<void> {
    await this.departmentRepository.insert(department)
  }
  

  async update(department: Department): Promise<void> {
    if (typeof department.id === 'string') this.departmentRepository.update({ id: department.id }, department)
  }
  

}