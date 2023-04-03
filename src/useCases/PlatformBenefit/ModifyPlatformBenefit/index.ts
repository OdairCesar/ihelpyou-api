import { dataSource } from "../../../../ormconfig";
import { PlatformBenefitORM } from "../../../database/typeorm/entity/PlatformBenefitORM";
import { PlatformBenefitRepository } from "../../../repositories/implementations/typeorm/PlatformBenefitRepository";
import { ModifyPlatformBenefitController } from "./ModifyPlatformBenefitController";
import { ModifyPlatformBenefitUseCase } from "./ModifyPlatformBenefitUseCase";

const typeormPlatformBenefitRepository = new PlatformBenefitRepository(
  dataSource.getRepository(PlatformBenefitORM)
)

const modifyPlatformBenefitUseCase = new ModifyPlatformBenefitUseCase(
  typeormPlatformBenefitRepository
) 

const modifyPlatformBenefitController = new ModifyPlatformBenefitController(
  modifyPlatformBenefitUseCase
)

export { modifyPlatformBenefitController, modifyPlatformBenefitUseCase }