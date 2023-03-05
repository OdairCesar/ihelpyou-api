import { Repository } from "typeorm";
import { City } from "../../../entities/City"
import { ICityRepository } from "../../ICityRepository";
import { CityORM } from "../../../database/typeorm/entity/CityORM";

export class CityRepository implements ICityRepository {

  constructor (
    private cityRepository: Repository<CityORM>
  ) { }
  

  async findById(id: string): Promise<City> {
    return await this.cityRepository.findOneBy({
      id: id
    })
  }


  async findByCity(city: string): Promise<City> {
    return await this.cityRepository.findOneBy({
      city: city
    })
  }


  async findByIdState(idState: string): Promise<Array<City>> {
    return await this.cityRepository.findBy({
      idState: {
        id: idState
      }
    })
  }


  async insert(city: City): Promise<void> {
    await this.cityRepository.insert(city)
  }


  async update(city: City): Promise<void> {
    if (typeof city.id === 'string') this.cityRepository.update({ id: city.id }, city)
  }


}