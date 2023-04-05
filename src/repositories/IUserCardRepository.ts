import { UserCard } from "../entities/UserCard"

export interface IUserCardRepository {
  findById(id: string): Promise<UserCard>
  findByIdUser(idUser: string): Promise<Array<UserCard>>
  insert(userCard: UserCard): Promise<void>
  update(userCard: UserCard): Promise<void>
  delete(userCard: UserCard): Promise<void>
}