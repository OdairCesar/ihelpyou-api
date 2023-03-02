import { User } from "../entities/User"

export interface IUserRepository {
  findById(id: string): Promise<User>
  findByCPF(cpf: number): Promise<User>
  findByIdBaseResgistration(idBaseRegistration: string): Promise<User>
  insert(user: User): Promise<void>
  update(user: User): Promise<void>
}