import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { BankCompanyORM } from "./BankCompanyORM"
import { DepartmentORM } from "./DepartmentORM"
import { ServiceORM } from "./ServiceORM"
import { CompanyStatusORM } from "./CompanyStatusORM"
import { BaseRegistrationORM } from "./BaseRegistrationORM"
import { CompanyDepartmentORM } from "./CompanyDepartmentORM"

@Entity('company')
export class CompanyORM {
  
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  name: string

  @Column({ nullable: true })
  description: string

  @Column({ nullable: true })
  mei: number

  @Column({ nullable: true })
  cnpj: number

  @Column({ nullable: true })
  cpf: number

  @OneToOne(type => BaseRegistrationORM, company => CompanyORM)
  @JoinColumn()
  idBaseRegistration: BaseRegistrationORM

  @OneToMany(type => BankCompanyORM, company => CompanyORM)
  banksCompany: BankCompanyORM[];

  @OneToMany(type => ServiceORM, company => CompanyORM)
  services: ServiceORM[]

  @OneToOne(type => CompanyStatusORM, company => CompanyORM, { nullable: true })
  @JoinColumn()
  idStatus: CompanyStatusORM

  @ManyToMany(type => DepartmentORM, department => department.companies)
  departments: DepartmentORM[]
  
  companyDepartment: CompanyDepartmentORM[]
}