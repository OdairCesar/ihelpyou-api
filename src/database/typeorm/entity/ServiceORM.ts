import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { ServiceAnalysisORM } from "./ServiceAnalysisORM"
import { DepartmentORM } from "./DepartmentORM"
import { CompanyORM } from "./CompanyORM"
import { OrderEvaluationORM } from "./OrderEvaluationORM"
import { OrderORM } from "./OrderORM"

@Entity('company_service')
export class ServiceORM {
  
  @PrimaryGeneratedColumn("uuid")
  id: string
  
  @Column()
  name: string
  
  @Column({ nullable: true })
  description: string
  
  @Column({ nullable: true })
  minTime: string
  
  @Column({ nullable: true })
  maxTime: string
  
  @Column()
  image: string
  
  @Column()
  value: number

  @OneToMany(type => OrderORM, service => ServiceORM)
  orders: OrderORM[]
  
  @OneToMany(type => ServiceAnalysisORM, service => ServiceORM)
  serviceAnalyzes: ServiceAnalysisORM[]
  
  @OneToMany(type => OrderEvaluationORM, service => ServiceORM)
  orderReviews: OrderEvaluationORM[]
  
  @ManyToOne(type => DepartmentORM, services => ServiceORM)
  idDepartment: DepartmentORM
  
  @ManyToOne(type => CompanyORM, services => ServiceORM)
  idCompany: CompanyORM

}