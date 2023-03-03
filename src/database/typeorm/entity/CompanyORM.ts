import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { BankCompanyORM } from "./BankCompanyORM"
import { DepartmentORM } from "./DepartmentORM"
import { CompanyServiceORM } from "./CompanyServiceORM"

@Entity('company')
export class CompanyORM {
  
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  description: string

  @Column()
  mei: number

  @Column()
  cnpj: number

  @Column()
  cpf: number

  @Column()
  idBaseRegistration: string

  @Column()
  idStatus: string

  @OneToMany(type => BankCompanyORM, company => CompanyORM)
  banksCompany: BankCompanyORM[];

  @ManyToMany(type => DepartmentORM)
  @JoinTable()
  departmentsCompanies: DepartmentORM

  @OneToMany(type => CompanyServiceORM, company => CompanyORM)
  companyServices: CompanyServiceORM[]
}