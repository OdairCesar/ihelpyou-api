import { IBaseRegistrationRepository } from "../../IBaseRegistrationRepository"
import { BaseRegistration } from "../../../entities/BaseRegistration"
import { Like, Repository } from "typeorm";
import { BaseRegistrationORM } from "../../../database/typeorm/entity/BaseRegistrationORM"

export class BaseRegistrationRepository implements IBaseRegistrationRepository {

  constructor (
    private baseRegistrationRepository: Repository<BaseRegistrationORM>
  ) { }
  

  async findById(id: string): Promise<BaseRegistration> {
    return await this.baseRegistrationRepository.findOneBy({
      id: id
    })
  }


  async findByName(name: string): Promise<Array<BaseRegistration>> {
    return await this.baseRegistrationRepository.findBy({
      name: Like('%'+name+'%')
    })
  }


  async findByFone(fone: number): Promise<BaseRegistration> {
    return await this.baseRegistrationRepository.findOneBy({
      fone: fone
    })
  }


  async findByActived(actived: boolean): Promise<Array<BaseRegistration>> {
    return await this.baseRegistrationRepository.findBy({
      active: actived
    })
  }


  async findByIdCidade(idCity: any): Promise<Array<BaseRegistration>> {
    return await this.baseRegistrationRepository.findBy({
      idCity: {
        id: idCity
      }
    })
  }


  async findByIdLogin(idAuth: any): Promise<BaseRegistration> {
    return await this.baseRegistrationRepository.findOneBy({
      idAuth: {
        id: idAuth
      }
    })
  }


  async insert(baseRegistration: BaseRegistration): Promise<void> {
    await this.baseRegistrationRepository.insert(baseRegistration)
  }


  async update(baseRegistration: BaseRegistration): Promise<void> {
    if (typeof baseRegistration.id === 'string') this.baseRegistrationRepository.update({ id: baseRegistration.id }, baseRegistration)
  }


}