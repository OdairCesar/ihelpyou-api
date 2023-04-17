import { dataSource } from "../../../../ormconfig";
import { ServiceAnalysisORM } from "../../../database/typeorm/entity/ServiceAnalysisORM";
import { ServiceORM } from "../../../database/typeorm/entity/ServiceORM";
import { ServiceAnalysisRepository } from "../../../repositories/implementations/typeorm/ServiceAnalysisRepository";
import { ServiceRepository } from "../../../repositories/implementations/typeorm/ServiceRepository";
import { CreateServiceAnalysisController } from "./CreateServiceAnalysisController";
import { CreateServiceAnalysisUseCase } from "./CreateServiceAnalysisUseCase";

const typeormServiceAnalysisRepository = new ServiceAnalysisRepository(
  dataSource.getRepository(ServiceAnalysisORM)
)

const typeormServiceRepository = new ServiceRepository(
  dataSource.getRepository(ServiceORM)
)

const createServiceAnalysisUseCase = new CreateServiceAnalysisUseCase(
  typeormServiceAnalysisRepository,
  typeormServiceRepository
)

const createServiceAnalysisController = new CreateServiceAnalysisController(
  createServiceAnalysisUseCase
)

export { createServiceAnalysisController, createServiceAnalysisUseCase }