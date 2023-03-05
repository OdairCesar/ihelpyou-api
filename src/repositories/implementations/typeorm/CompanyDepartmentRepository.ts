import { Repository } from "typeorm";
import { ICompanyDepartmentRepository } from "../../ICompanyDepartmentRepository";
import { CompanyDepartmentORM } from "../../../database/typeorm/entity/CompanyDepartmentORM";
import { CompanyDepartment } from "../../../entities/CompanyDepartment";

export class CompanyDepartmentRepository implements ICompanyDepartmentRepository {

  constructor (
    private companyDepartmentRepository: Repository<CompanyDepartmentORM>,
  ) { }
  
  
  async findByIdCompany(idCompany: string): Promise<Array<CompanyDepartment>> {
    return await this.companyDepartmentRepository.findBy({
      idCompany: idCompany
    })
  }

  
  async findByIdDepartment(idDepartment: string): Promise<Array<CompanyDepartment>> {
    return await this.companyDepartmentRepository.findBy({
      idDepartment: idDepartment
    })
  }


}