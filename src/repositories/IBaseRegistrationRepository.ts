import { BaseRegistration } from "../entities/BaseRegistration"

export interface IBaseRegistrationRepository {
  findById(id: string): Promise<BaseRegistration>
  findByName(name: string): Promise<Array<BaseRegistration>>
  findByFone(fone: number): Promise<BaseRegistration>
  findByActived(actived: boolean): Promise<Array<BaseRegistration>>
  findByIdCidade(idCity: string): Promise<Array<BaseRegistration>>
  findByIdLogin(idAuth: string): Promise<BaseRegistration>
  insert(baseRegistration: BaseRegistration): Promise<void>
  update(baseRegistration: BaseRegistration): Promise<void>
}