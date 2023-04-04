import { dataSource } from "../../../../ormconfig";
import { PlatformPlanORM } from "../../../database/typeorm/entity/PlatformPlanORM";
import { PlatformPlanRepository } from "../../../repositories/implementations/typeorm/PlatformPlanRepository";
import { DeletePlatformPlanController } from "./DeletePlatformPlanController";
import { DeletePlatformPlanUseCase } from "./DeletePlatformPlanUseCase";


const typeormPlatformPlanRepository = new PlatformPlanRepository(
  dataSource.getRepository(PlatformPlanORM)
)

const deletePlatformPlanUseCase = new DeletePlatformPlanUseCase(
  typeormPlatformPlanRepository,
)

const deletePlatformPlanController = new DeletePlatformPlanController(
  deletePlatformPlanUseCase
)

export { deletePlatformPlanUseCase, deletePlatformPlanController }