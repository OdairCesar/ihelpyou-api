import { Repository } from "typeorm"
import { User } from "../../../entities/User"
import { UserORM } from "../../../database/typeorm/entity/UserORM"
import { IUserRepository } from "../../IUserRepository"

export class UserRepository implements IUserRepository {

  constructor (
    private userRepository: Repository<UserORM>
  ) { }


  async findById(id: string): Promise<User> {
    return await this.userRepository.findOneBy({
      id: id
    })
  }
  

  async findByCPF(cpf: number): Promise<User> {
    return await this.userRepository.findOneBy({
      cpf: cpf
    })
  }
  

  async findByIdBaseResgistration(idBaseRegistration: string): Promise<User> {
    return await this.userRepository.findOneBy({
      idBaseRegistration: {
        id: idBaseRegistration
      }
    })
  }
  

  async insert(user: User): Promise<void> {
    await this.userRepository.insert(user)
  }
  

  async update(user: User): Promise<void> {
    if (typeof user.id === 'string') this.userRepository.update({ id: user.id }, user)
  }
  

}