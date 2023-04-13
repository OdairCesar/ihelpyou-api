import { dataSource } from "../../../../ormconfig";
import { PlatformBenefitORM } from "../../../database/typeorm/entity/PlatformBenefitORM";
import { PlatformPlanORM } from "../../../database/typeorm/entity/PlatformPlanORM";
import { PlatformBenefitRepository } from "../../../repositories/implementations/typeorm/PlatformBenefitRepository";
import { PlatformPlanRepository } from "../../../repositories/implementations/typeorm/PlatformPlanRepository";
import { ModifyPlatformBenefitController } from "./ModifyPlatformBenefitController";
import { ModifyPlatformBenefitUseCase } from "./ModifyPlatformBenefitUseCase";

const typeormPlatformBenefitRepository = new PlatformBenefitRepository(
  dataSource.getRepository(PlatformBenefitORM)
)

const typeormPlatformPlanRepository = new PlatformPlanRepository(
  dataSource.getRepository(PlatformPlanORM)
)

const modifyPlatformBenefitUseCase = new ModifyPlatformBenefitUseCase(
  typeormPlatformBenefitRepository,
  typeormPlatformPlanRepository
) 

const modifyPlatformBenefitController = new ModifyPlatformBenefitController(
  modifyPlatformBenefitUseCase
)

export { modifyPlatformBenefitController, modifyPlatformBenefitUseCase }