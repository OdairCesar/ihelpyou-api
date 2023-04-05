import { Repository } from "typeorm";
import { UserCard } from "../../../entities/UserCard"
import { IUserCardRepository } from "../../IUserCardRepository";
import { UserCardORM } from "../../../database/typeorm/entity/UserCardORM";

export class UserCardRepository implements IUserCardRepository {

  constructor (
    private userCardRepository: Repository<UserCardORM>
  ) { }


  async findById(id: string): Promise<UserCard> {
    return await this.userCardRepository.findOneBy({
      id: id
    })
  }
  
  
  async findByIdUser(idUser: string): Promise<Array<UserCard>> {
    return await this.userCardRepository.findBy({
      idUser: {
        id: idUser
      }
    })
  }
  
  
  async insert(userCard: UserCard): Promise<void> {
    await this.userCardRepository.insert(userCard)
  }
  
  
  async update(userCard: UserCard): Promise<void> {
    if (typeof userCard.id === 'string') this.userCardRepository.update({ id: userCard.id }, userCard)
  }
  
  
  async delete(userCard: UserCard): Promise<void> {
    if (typeof userCard.id === 'string') this.userCardRepository.delete({ id: userCard.id })
  }
}