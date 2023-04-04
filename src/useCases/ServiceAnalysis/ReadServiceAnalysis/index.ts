import { dataSource } from "../../../../ormconfig";
import { ServiceAnalysisORM } from "../../../database/typeorm/entity/ServiceAnalysisORM";
import { ServiceAnalysisRepository } from "../../../repositories/implementations/typeorm/ServiceAnalysisRepository";
import { ReadServiceAnalysisController } from "./ReadServiceAnalysisController";
import { ReadServiceAnalysisUseCase } from "./ReadServiceAnalysisUseCase";

const typeormServiceAnalysisRepository = new ServiceAnalysisRepository(
  dataSource.getRepository(ServiceAnalysisORM)
);

const readServiceAnalysisUseCase = new ReadServiceAnalysisUseCase(
  typeormServiceAnalysisRepository
);

const readServiceAnalysisController = new ReadServiceAnalysisController(
  readServiceAnalysisUseCase
);

export { readServiceAnalysisUseCase, readServiceAnalysisController };
