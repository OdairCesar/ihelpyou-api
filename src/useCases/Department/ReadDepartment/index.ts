import { dataSource } from "../../../../ormconfig";
import { DepartmentORM } from "../../../database/typeorm/entity/DepartmentORM";
import { DepartmentRepository } from "../../../repositories/implementations/typeorm/DepartmentRepository";
import { ReadDepartmentController } from "./ReadDepartmentController";
import { ReadDepartmentUseCase } from "./ReadDepartmentUseCase";


const typeormDepartmentRepository = new DepartmentRepository(
  dataSource.getRepository(DepartmentORM)
)

const readDepartmentUseCase = new ReadDepartmentUseCase(
  typeormDepartmentRepository,
)

const readDepartmentController = new ReadDepartmentController(
  readDepartmentUseCase
)

export { readDepartmentUseCase, readDepartmentController }