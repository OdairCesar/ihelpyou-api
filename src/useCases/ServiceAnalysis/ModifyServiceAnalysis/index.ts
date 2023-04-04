import { dataSource } from "../../../../ormconfig";
import { ServiceAnalysisORM } from "../../../database/typeorm/entity/ServiceAnalysisORM";
import { ServiceAnalysisRepository } from "../../../repositories/implementations/typeorm/ServiceAnalysisRepository";
import { ModifyServiceAnalysisController } from "./ModifyServiceAnalysisController";
import { ModifyServiceAnalysisUseCase } from "./ModifyServiceAnalysisUseCase";

const typeormServiceAnalysisRepository = new ServiceAnalysisRepository(
  dataSource.getRepository(ServiceAnalysisORM)
)

const modifyServiceAnalysisUseCase = new ModifyServiceAnalysisUseCase(
  typeormServiceAnalysisRepository
) 

const modifyServiceAnalysisController = new ModifyServiceAnalysisController(
  modifyServiceAnalysisUseCase
)

export { modifyServiceAnalysisController, modifyServiceAnalysisUseCase }