import { ICompanyStatusRepository } from "../../ICompanyStatusRepository";
import { CompanyStatus } from "../../../entities/CompanyStatus"
import { Repository } from "typeorm";
import { CompanyStatusORM } from "../../../database/typeorm/entity/CompanyStatusORM";

export class CompanyStatusRepository implements ICompanyStatusRepository {

  constructor (
    private companyStatusRepository: Repository<CompanyStatusORM>
  ) { }


  async findById(id: string): Promise<CompanyStatus> {
    return await this.companyStatusRepository.findOneBy({
      id: id
    })
  }
  

  async findByPaid(paid: boolean): Promise<Array<CompanyStatus>> {
    return await this.companyStatusRepository.findBy({
      paid: paid
    })
  }
  

  async findByRestriction(restriction: boolean): Promise<Array<CompanyStatus>> {
    return await this.companyStatusRepository.findBy({
      restriction: restriction
    })
  }
  

  async findByDateAdmission(date: Date): Promise<Array<CompanyStatus>> {
    return await this.companyStatusRepository.findBy({
      dateAdmission: date
    })
  }
  

  async findByActivated(activated: boolean): Promise<Array<CompanyStatus>> {
    return await this.companyStatusRepository.findBy({
      activated: activated
    })
  }
  

  async findByIdPlan(idPlan: string): Promise<Array<CompanyStatus>> {
    return await this.companyStatusRepository.findBy({
      idPlan: {
        id: idPlan
      },
    })
  }
  

  async insert(companyStatus: CompanyStatus): Promise<void> {
    await this.companyStatusRepository.insert(companyStatus)
  }
  

  async update(companyStatus: CompanyStatus): Promise<void> {
    if (typeof companyStatus.id === 'string') this.companyStatusRepository.update({ id: companyStatus.id }, companyStatus)
  }
  

}