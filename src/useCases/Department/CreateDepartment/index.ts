import { dataSource } from "../../../../ormconfig";
import { DepartmentORM } from "../../../database/typeorm/entity/DepartmentORM";
import { DepartmentRepository } from "../../../repositories/implementations/typeorm/DepartmentRepository";
import { CreateDepartmentController } from "./CreateDepartmentController";
import { CreateDepartmentUseCase } from "./CreateDepartmentUseCase";

const departmentRepository = new DepartmentRepository(
  dataSource.getRepository(DepartmentORM)
)

const createDepartmentUseCase = new CreateDepartmentUseCase(
  departmentRepository
) 

const createDepartmentController = new CreateDepartmentController(
  createDepartmentUseCase
)

export { createDepartmentController, createDepartmentUseCase }