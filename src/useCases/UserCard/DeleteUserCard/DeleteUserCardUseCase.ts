import { IUserCardRepository } from "../../../repositories/IUserCardRepository";

export class DeleteUserCardUseCase {
  constructor (
    private userCardRepository: IUserCardRepository
  ) { }

  async execute(data: IUserCardRequestDTO) {
    const UserCard = await this.userCardRepository.findById(data.id)

    if (!UserCard){
      throw Error('Não foi possivel deletar essa analise')
    }

    await this.userCardRepository.delete(UserCard)
  }
}