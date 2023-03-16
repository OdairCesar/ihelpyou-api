import { dataSource } from "../../../../ormconfig";
import { ServiceORM } from "../../../database/typeorm/entity/ServiceORM";
import { ServiceRepository } from "../../../repositories/implementations/typeorm/ServiceRepository";
import { DeleteServiceController } from "./DeleteServiceController";
import { DeleteServiceUseCase } from "./DeleteServiceUseCase";


const typeormServiceRepository = new ServiceRepository(
  dataSource.getRepository(ServiceORM)
)

const deleteServiceUseCase = new DeleteServiceUseCase(
  typeormServiceRepository,
)

const deleteServiceController = new DeleteServiceController(
  deleteServiceUseCase
)

export { deleteServiceUseCase, deleteServiceController }