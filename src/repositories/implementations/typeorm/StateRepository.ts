import { Repository } from "typeorm";
import { State } from "../../../entities/State"
import { StateORM } from "../../../database/typeorm/entity/StateORM";
import { IStateRepository } from "../../IStateRepository";

export class StateRepository implements IStateRepository {

  constructor (
    private stateRepository: Repository<StateORM>
  ) { }


  async findById(id: string): Promise<State> {
    return await this.stateRepository.findOneBy({
      id: id
    })
  }
  

  async findByState(name: string): Promise<State> {
    return await this.stateRepository.findOneBy({
      name: name
    })
  }
  

  async findByCountry(country: string): Promise<Array<State>> {
    return await this.stateRepository.findBy({
      country: country
    })
  }
  

  async insert(state: State): Promise<void> {
    await this.stateRepository.insert(state)
  }
  

  async update(state: State): Promise<void> {
    if (typeof state.id === 'string') this.stateRepository.update({ id: state.id }, state)
  }
  

}