import { UserCard } from "../../../entities/UserCard";
import { IUserCardRepository } from "../../../repositories/IUserCardRepository"
import { IUserRepository } from "../../../repositories/IUserRepository";
import { ICreateUserCardRequestDTO } from "./CreateUserCardDTO"

export class CreateUserCardUseCase {
  constructor(
    private userCardRepository: IUserCardRepository,
    private userRepository: IUserRepository,
  ) { }

  async execute(data: ICreateUserCardRequestDTO) {
    const user = await this.userRepository.findById(data.idUser)

    if (!user){
      throw Error('Alguma informação passada é incorreta ou inválida')
    }

    const userCard = new UserCard(data)

    this.userCardRepository.insert(userCard)
  }
}