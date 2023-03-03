import { City } from "../entities/City"

export interface ICityRepository {
  findById(id: string): Promise<City>
  findByCity(city: string): Promise<City>
  findByIdState(idState: string): Promise<Array<City>>
  insert(city: City): Promise<void>
  update(city: City): Promise<void>
}