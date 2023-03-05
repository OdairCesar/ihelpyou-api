import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { ServiceAnalysisORM } from "./ServiceAnalysisORM"
import { DepartmentORM } from "./DepartmentORM"
import { CompanyORM } from "./CompanyORM"
import { OrderEvaluationORM } from "./OrderEvaluationORM"
import { OrderORM } from "./OrderORM"

@Entity('company_service')
export class CompanyServiceORM {
  
  @PrimaryGeneratedColumn("uuid")
  id: string
  
  @Column()
  name: string
  
  @Column()
  description: string
  
  @Column()
  minTime: string
  
  @Column()
  maxTime: string
  
  @Column()
  image: string
  
  @Column()
  value: number

  @OneToMany(type => OrderORM, companyService => CompanyServiceORM)
  orders: OrderORM[]
  
  @OneToMany(type => ServiceAnalysisORM, companyService => CompanyServiceORM)
  serviceAnalyzes: ServiceAnalysisORM[]
  
  @OneToMany(type => OrderEvaluationORM, companyService => CompanyServiceORM)
  orderReviews: OrderEvaluationORM[]
  
  @ManyToOne(type => DepartmentORM, companyServices => CompanyServiceORM)
  idDepartment: DepartmentORM
  
  @ManyToOne(type => CompanyORM, companyServices => CompanyServiceORM)
  idCompany: CompanyORM

}