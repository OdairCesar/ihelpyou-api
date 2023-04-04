import { dataSource } from "../../../../ormconfig";
import { PlatformPlanORM } from "../../../database/typeorm/entity/PlatformPlanORM";
import { PlatformPlanRepository } from "../../../repositories/implementations/typeorm/PlatformPlanRepository";
import { CreatePlatformPlanController } from "./CreatePlatformPlanController";
import { CreatePlatformPlanUseCase } from "./CreatePlatformPlanUseCase";

const platformPlanRepository = new PlatformPlanRepository(
  dataSource.getRepository(PlatformPlanORM)
)

const createPlatformPlanUseCase = new CreatePlatformPlanUseCase(
  platformPlanRepository
)

const createPlatformPlanController = new CreatePlatformPlanController(
  createPlatformPlanUseCase
)

export { createPlatformPlanController, createPlatformPlanUseCase }