import { dataSource } from "../../../../ormconfig";
import { PlatformBenefitORM } from "../../../database/typeorm/entity/PlatformBenefitORM";
import { PlatformBenefitRepository } from "../../../repositories/implementations/typeorm/PlatformBenefitRepository";
import { DeletePlatformBenefitController } from "./DeletePlatformBenefitController";
import { DeletePlatformBenefitUseCase } from "./DeletePlatformBenefitUseCase";


const typeormPlatformBenefitRepository = new PlatformBenefitRepository(
  dataSource.getRepository(PlatformBenefitORM)
)

const deletePlatformBenefitUseCase = new DeletePlatformBenefitUseCase(
  typeormPlatformBenefitRepository,
)

const deletePlatformBenefitController = new DeletePlatformBenefitController(
  deletePlatformBenefitUseCase
)

export { deletePlatformBenefitUseCase, deletePlatformBenefitController }