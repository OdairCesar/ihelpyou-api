import { State } from "../entities/State"

export interface IStateRepository {
  findById(id: string): Promise<State>
  findByState(state: string): Promise<State>
  findByCountry(country: string): Promise<Array<State>>
  insert(state: State): Promise<void>
  update(state: State): Promise<void>
}