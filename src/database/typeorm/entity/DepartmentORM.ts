import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ServiceORM } from "./ServiceORM";
import { CompanyORM } from "./CompanyORM";
import { CompanyDepartmentORM } from "./CompanyDepartmentORM";

@Entity("department")
export class DepartmentORM {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ type: 'varchar', length: 2000, nullable: true})
  description: string;

  @Column({ nullable: true})
  image: string;

  @OneToMany(type => ServiceORM, department => DepartmentORM)
  services: ServiceORM[]
 
  @ManyToMany(type => CompanyORM, company => company.departments)
  @JoinTable()
  companies: CompanyORM[]
}
