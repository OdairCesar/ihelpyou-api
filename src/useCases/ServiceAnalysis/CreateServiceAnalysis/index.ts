import { dataSource } from "../../../../ormconfig";
import { ServiceAnalysisORM } from "../../../database/typeorm/entity/ServiceAnalysisORM";
import { ServiceAnalysisRepository } from "../../../repositories/implementations/typeorm/ServiceAnalysisRepository";
import { CreateServiceAnalysisController } from "./CreateServiceAnalysisController";
import { CreateServiceAnalysisUseCase } from "./CreateServiceAnalysisUseCase";

const serviceAnalysisRepository = new ServiceAnalysisRepository(
  dataSource.getRepository(ServiceAnalysisORM)
)

const createServiceAnalysisUseCase = new CreateServiceAnalysisUseCase(
  serviceAnalysisRepository
)

const createServiceAnalysisController = new CreateServiceAnalysisController(
  createServiceAnalysisUseCase
)

export { createServiceAnalysisController, createServiceAnalysisUseCase }