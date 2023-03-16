import { dataSource } from "../../../../ormconfig";
import { ServiceORM } from "../../../database/typeorm/entity/ServiceORM";
import { ServiceRepository } from "../../../repositories/implementations/typeorm/ServiceRepository";
import { ReadServiceController } from "./ReadServiceController";
import { ReadServiceUseCase } from "./ReadServiceUseCase";

const typeormServiceRepository = new ServiceRepository(
  dataSource.getRepository(ServiceORM)
)

const readServiceUseCase = new ReadServiceUseCase(
  typeormServiceRepository,
)

const readServiceController = new ReadServiceController(
  readServiceUseCase
)

export { readServiceUseCase, readServiceController }