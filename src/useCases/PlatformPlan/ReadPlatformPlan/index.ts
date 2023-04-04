
import { dataSource } from "../../../../ormconfig";
import { PlatformPlanORM } from "../../../database/typeorm/entity/PlatformPlanORM";
import { PlatformPlanRepository } from "../../../repositories/implementations/typeorm/PlatformPlanRepository";
import { ReadPlatformPlanController } from "./ReadPlatformPlanController";
import { ReadPlatformPlanUseCase } from "./ReadPlatformPlanUseCase";


const typeormPlatformPlanRepository = new PlatformPlanRepository(
  dataSource.getRepository(PlatformPlanORM)
)

const readPlatformPlanUseCase = new ReadPlatformPlanUseCase(
  typeormPlatformPlanRepository,
)

const readPlatformPlanController = new ReadPlatformPlanController(
  readPlatformPlanUseCase
)

export { readPlatformPlanUseCase, readPlatformPlanController }