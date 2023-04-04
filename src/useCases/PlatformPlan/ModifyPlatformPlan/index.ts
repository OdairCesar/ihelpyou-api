import { dataSource } from "../../../../ormconfig";
import { PlatformPlanORM } from "../../../database/typeorm/entity/PlatformPlanORM";
import { PlatformPlanRepository } from "../../../repositories/implementations/typeorm/PlatformPlanRepository";
import { ModifyPlatformPlanController } from "./ModifyPlatformPlanController";
import { ModifyPlatformPlanUseCase } from "./ModifyPlatformPlanUseCase";

const typeormPlatformPlanRepository = new PlatformPlanRepository(
  dataSource.getRepository(PlatformPlanORM)
)

const modifyPlatformPlanUseCase = new ModifyPlatformPlanUseCase(
  typeormPlatformPlanRepository
) 

const modifyPlatformPlanController = new ModifyPlatformPlanController(
  modifyPlatformPlanUseCase
)

export { modifyPlatformPlanController, modifyPlatformPlanUseCase }