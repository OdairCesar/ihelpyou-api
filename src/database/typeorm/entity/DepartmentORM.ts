import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CompanyServiceORM } from "./CompanyServiceORM";
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

  @OneToMany(type => CompanyServiceORM, department => DepartmentORM)
  companyServices: CompanyServiceORM[]
 
  @ManyToMany(type => CompanyORM, company => company.departments)
  companies: CompanyORM[]

  companyDepartment: CompanyDepartmentORM
}
