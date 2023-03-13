import { dataSource } from "../../../../ormconfig";
import { CityORM } from "../../../database/typeorm/entity/CityORM";
import { CityRepository } from "../../../repositories/implementations/typeorm/CityRepository";
import { ReadCityController } from "./ReadCityController";
import { ReadCityUseCase } from "./ReadCityUseCase";

const typeormCityRepository = new CityRepository(
  dataSource.getRepository(CityORM)
)

const readCityUseCase = new ReadCityUseCase(
  typeormCityRepository,
)

const readCityController = new ReadCityController(
  readCityUseCase
)

export { readCityUseCase, readCityController }