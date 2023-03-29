import { dataSource } from "../../../../ormconfig";
import { DepartmentORM } from "../../../database/typeorm/entity/DepartmentORM";
import { DepartmentRepository } from "../../../repositories/implementations/typeorm/DepartmentRepository";
import { ModifyDepartmentController } from "./ModifyDepartmentController";
import { ModifyDepartmentUseCase } from "./ModifyDepartmentUseCase";

const typeormDepartmentRepository = new DepartmentRepository(
  dataSource.getRepository(DepartmentORM)
)

const modifyDepartmentUseCase = new ModifyDepartmentUseCase(
  typeormDepartmentRepository
) 

const modifyDepartmentController = new ModifyDepartmentController(
  modifyDepartmentUseCase
)

export { modifyDepartmentController, modifyDepartmentUseCase }