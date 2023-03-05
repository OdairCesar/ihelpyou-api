import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { BankCompanyORM } from "./BankCompanyORM"
import { DepartmentORM } from "./DepartmentORM"
import { CompanyServiceORM } from "./CompanyServiceORM"
import { CompanyStatusORM } from "./CompanyStatusORM"
import { BaseRegistrationORM } from "./BaseRegistrationORM"
import { CompanyDepartmentORM } from "./CompanyDepartmentORM"

@Entity('company')
export class CompanyORM {
  
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  description: string

  @Column()
  mei: number

  @Column()
  cnpj: number

  @Column()
  cpf: number

  @OneToOne(type => BaseRegistrationORM, company => CompanyORM)
  @JoinColumn()
  idBaseRegistration: BaseRegistrationORM

  @OneToMany(type => BankCompanyORM, company => CompanyORM)
  banksCompany: BankCompanyORM[];

  @OneToMany(type => CompanyServiceORM, company => CompanyORM)
  companyServices: CompanyServiceORM[]

  @ManyToOne(type => CompanyStatusORM, companies => CompanyORM)
  idStatus: CompanyStatusORM

  @ManyToMany(type => DepartmentORM, department => department.companies)
  @JoinTable({
    name: "company_department",
    joinColumn: {
      name: "id_company",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "id_department",
      referencedColumnName: "id"
    }
  })
  departments: DepartmentORM[]
  
  companyDepartment: CompanyDepartmentORM[]
}