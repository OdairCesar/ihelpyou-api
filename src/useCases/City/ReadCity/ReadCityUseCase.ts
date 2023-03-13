import { ICityRepository } from "../../../repositories/ICityRepository";
import { City } from "../../../entities/City";
import { IReadCityRequestDTO } from "./ReadCityDTO";

export class ReadCityUseCase {
  constructor (
    private CityRepository: ICityRepository,
  ) {}

  async execute(data: IReadCityRequestDTO) {
    let cities: City[]

    if (data.id) {
      cities.push(await this.CityRepository.findById(data.id))
    } else if (data.idState) {
      cities = await this.CityRepository.findByIdState(data.idState)
    }

    if (cities) return cities

    throw new Error('Não houve resultado nas buscas')
  }
}