import { dataSource } from "../../../../ormconfig";
import { DepartmentORM } from "../../../database/typeorm/entity/DepartmentORM";
import { DepartmentRepository } from "../../../repositories/implementations/typeorm/DepartmentRepository";
import { DeleteDepartmentController } from "./DeleteDepartmentController";
import { DeleteDepartmentUseCase } from "./DeleteDepartmentUseCase";


const typeormDepartmentRepository = new DepartmentRepository(
  dataSource.getRepository(DepartmentORM)
)

const deleteDepartmentUseCase = new DeleteDepartmentUseCase(
  typeormDepartmentRepository,
)

const deleteDepartmentController = new DeleteDepartmentController(
  deleteDepartmentUseCase
)

export { deleteDepartmentUseCase, deleteDepartmentController }