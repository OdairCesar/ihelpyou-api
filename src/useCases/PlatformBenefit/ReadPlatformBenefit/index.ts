import { dataSource } from "../../../../ormconfig";
import { PlatformBenefitORM } from "../../../database/typeorm/entity/PlatformBenefitORM";
import { PlatformBenefitRepository } from "../../../repositories/implementations/typeorm/PlatformBenefitRepository";
import { ReadPlatformBenefitController } from "./ReadPlatformBenefitController";
import { ReadPlatformBenefitUseCase } from "./ReadPlatformBenefitUseCase";


const typeormPlatformBenefitRepository = new PlatformBenefitRepository(
  dataSource.getRepository(PlatformBenefitORM)
)

const readPlatformBenefitUseCase = new ReadPlatformBenefitUseCase(
  typeormPlatformBenefitRepository,
)

const readPlatformBenefitController = new ReadPlatformBenefitController(
  readPlatformBenefitUseCase
)

export { readPlatformBenefitUseCase, readPlatformBenefitController }