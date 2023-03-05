import { LessThanOrEqual, MoreThanOrEqual, Repository } from "typeorm";
import { CompanyService } from "../../../entities/CompanyService"
import { ICompanyServiceRepository } from "../../ICompanyServiceRepository";
import { CompanyServiceORM } from "../../../database/typeorm/entity/CompanyServiceORM";

export class CompanyServiceRepository implements ICompanyServiceRepository {

  constructor (
    private companyServiceRepository: Repository<CompanyServiceORM>
  ) { }


  async findById(id: string): Promise<CompanyService> {
    return await this.companyServiceRepository.findOneBy({
      id: id,
    })
  }
  

  async findByName(name: string): Promise<Array<CompanyService>> {
    return await this.companyServiceRepository.findBy({
      name: name,
    })
  }
  

  async findByMinimumTime(minimumTime: string): Promise<Array<CompanyService>> {
    return await this.companyServiceRepository.findBy({
      minTime: MoreThanOrEqual(minimumTime),
    })
  }
  

  async findByMaximumTime(maximumTime: string): Promise<Array<CompanyService>> {
    return await this.companyServiceRepository.findBy({
      maxTime: LessThanOrEqual(maximumTime),
    })
  }
  

  async findByValue(value: number): Promise<Array<CompanyService>> {
    return await this.companyServiceRepository.findBy({
      value: value,
    })
  }
  

  async findByIdServiceAnalysis(idServiceAnalysis: string): Promise<CompanyService> {
    return await this.companyServiceRepository.findOneBy({
      serviceAnalyzes: {
        id: idServiceAnalysis
      },
    })
  }
  

  async findByIdDepartment(idDepartment: string): Promise<Array<CompanyService>> {
    return await this.companyServiceRepository.findBy({
      idDepartment: {
        id: idDepartment
      },
    })
  }
  

  async findByIdCompany(idCompany: string): Promise<Array<CompanyService>> {
    return await this.companyServiceRepository.findBy({
      idCompany: {
        id: idCompany
      }
    })
  }
  

  async insert(companyService: CompanyService): Promise<void> {
    await this.companyServiceRepository.insert(companyService)
  }
  

  async update(companyService: CompanyService): Promise<void> {
    if (typeof companyService.id === 'string') this.companyServiceRepository.update({ id: companyService.id }, companyService)
  }
  

}