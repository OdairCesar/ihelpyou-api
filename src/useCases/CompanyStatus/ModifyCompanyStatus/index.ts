import { dataSource } from "../../../../ormconfig";
import { CompanyStatusORM } from "../../../database/typeorm/entity/CompanyStatusORM";
import { PlatformPlanORM } from "../../../database/typeorm/entity/PlatformPlanORM";
import { CompanyStatusRepository } from "../../../repositories/implementations/typeorm/CompanyStatusRepository";
import { PlatformPlanRepository } from "../../../repositories/implementations/typeorm/PlatformPlanRepository";
import { ModifyCompanyStatusController } from "./ModifyCompanyStatusController";
import { ModifyCompanyStatusUseCase } from "./ModifyCompanyStatusUseCase";

const typeormPlatformPlanRepository = new PlatformPlanRepository(
  dataSource.getRepository(PlatformPlanORM)
)

const typeormCompanyStatusRepository = new CompanyStatusRepository(
  dataSource.getRepository(CompanyStatusORM)
)

const modifyCompanyStatusUseCase = new ModifyCompanyStatusUseCase(
  typeormCompanyStatusRepository,
  typeormPlatformPlanRepository
) 

const modifyCompanyStatusController = new ModifyCompanyStatusController(
  modifyCompanyStatusUseCase
)

export { modifyCompanyStatusController, modifyCompanyStatusUseCase }