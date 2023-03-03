import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CompanyServiceORM } from "./CompanyServiceORM";

@Entity("department")
export class DepartmentORM {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @OneToMany(type => CompanyServiceORM, department => DepartmentORM)
  companyServices: CompanyServiceORM[]
}
