import { IUserCardRepository } from "../../../repositories/IUserCardRepository";
import { UserCard } from "../../../entities/UserCard";
import { IReadUserCardRequestDTO } from "./ReadUserCardDTO";

export class ReadUserCardUseCase {
  constructor (
    private userCardRepository: IUserCardRepository,
  ) {}

  async execute(data: IReadUserCardRequestDTO) {
    let userCards: UserCard[]

    if (data.id) {
      userCards.push(await this.userCardRepository.findById(data.id))
    } else if (data.idUser) {
      userCards = await this.userCardRepository.findByIdUser(data.idUser)
    } 

    if (userCards) return userCards

    throw new Error('Não houve resultado nas buscas')
  }
}