import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ServiceORM } from "./ServiceORM";
import { CompanyORM } from "./CompanyORM";
import { CompanyDepartmentORM } from "./CompanyDepartmentORM";

@Entity("department")
export class DepartmentORM {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @OneToMany(type => ServiceORM, department => DepartmentORM)
  services: ServiceORM[]
 
  @ManyToMany(type => CompanyORM, company => company.departments)
  companies: CompanyORM[]

  companyDepartment: CompanyDepartmentORM
}
