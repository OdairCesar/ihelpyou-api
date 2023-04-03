import { dataSource } from "../../../../ormconfig";
import { PlatformBenefitORM } from "../../../database/typeorm/entity/PlatformBenefitORM";
import { PlatformPlanORM } from "../../../database/typeorm/entity/PlatformPlanORM";
import { PlatformBenefitRepository } from "../../../repositories/implementations/typeorm/PlatformBenefitRepository";
import { PlatformPlanRepository } from "../../../repositories/implementations/typeorm/PlatformPlanRepository";
import { CreatePlatformBenefitController } from "./CreatePlatformBenefitController";
import { CreatePlatformBenefitUseCase } from "./CreatePlatformBenefitUseCase";

const platformBenefitRepository = new PlatformBenefitRepository(
  dataSource.getRepository(PlatformBenefitORM)
)

const platformPlanRepository = new PlatformPlanRepository(
  dataSource.getRepository(PlatformPlanORM)
)

const createPlatformBenefitUseCase = new CreatePlatformBenefitUseCase(
  platformBenefitRepository,
  platformPlanRepository
) 

const createPlatformBenefitController = new CreatePlatformBenefitController(
  createPlatformBenefitUseCase
)

export { createPlatformBenefitController, createPlatformBenefitUseCase }