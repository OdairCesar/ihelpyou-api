import { IStateRepository } from "../../../repositories/IStateRepository";
import { State } from "../../../entities/State";
import { IReadStateRequestDTO } from "./ReadStateDTO";

export class ReadStateUseCase {
  constructor (
    private StateRepository: IStateRepository,
  ) {}

  async execute(data: IReadStateRequestDTO) {
    let states: State[]

    if (data.id) {
      states.push(await this.StateRepository.findById(data.id))
    } else if (data.name) {
      states.push(await this.StateRepository.findByState(data.name))
    } else if (data.country) {
      states = await this.StateRepository.findByCountry(data.country)
    }

    if (states) return states

    throw new Error('Não houve resultado nas buscas')
  }
}