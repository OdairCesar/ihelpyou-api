import { ICompanyRepository } from "../../ICompanyRepository";
import { Company } from "../../../entities/Company"
import { Repository } from "typeorm";
import { CompanyORM } from "../../../database/typeorm/entity/CompanyORM";

export class CompanyRepository implements ICompanyRepository {

  constructor (
    private companyRepository: Repository<CompanyORM>
  ) { }


  async findById(id: string): Promise<Company> {
    return await this.companyRepository.findOne({
      where: {
        id: id,
      },
      relations: [ "idBaseRegistration", "idStatus" ],
    })
  }

  
  async findByMEI(mei: number): Promise<Company> {
    return await this.companyRepository.findOneBy({
      mei: mei,
    })
  }

  
  async findByCNPJ(cnpj: number): Promise<Company> {
    return await this.companyRepository.findOneBy({
      cnpj: cnpj,
    })
  }

  
  async findByCPF(cpf: number): Promise<Array<Company>> {
    return await this.companyRepository.findBy({
      cpf: cpf,
    })
  }
  

  async findByIdBaseRegistration(idBaseRegistration: string): Promise<Company> {
    return await this.companyRepository.findOne({
      where: {
        idBaseRegistration: {
          id: idBaseRegistration
        }
      },
      relations: [ "idBaseRegistration", "idStatus" ]
    })
  }

  
  async findByIdStatus(idStatus: any): Promise<Company> {
    return await this.companyRepository.findOneBy({
      idStatus: {
        id: idStatus
      }
    })
  }

  
  async insert(company: Company): Promise<void> {
    await this.companyRepository.insert(company)
  }

  
  async update(company: Company): Promise<void> {
    if (typeof company.id === 'string') this.companyRepository.update({ id: company.id }, company)
  }
  

}