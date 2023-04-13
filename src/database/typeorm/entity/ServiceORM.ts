import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { ServiceAnalysisORM } from "./ServiceAnalysisORM"
import { DepartmentORM } from "./DepartmentORM"
import { CompanyORM } from "./CompanyORM"
import { OrderEvaluationORM } from "./OrderEvaluationORM"
import { OrderORM } from "./OrderORM"

@Entity('service')
export class ServiceORM {
  
  @PrimaryGeneratedColumn("uuid")
  id: string
  
  @Column()
  name: string
  
  @Column({ type: 'varchar', length: 2000, nullable: true })
  description: string
  
  @Column({ type: 'float', nullable: true })
  minTimeInDay: number
  
  @Column({ type: 'float', nullable: true })
  maxTimeInDay: number
  
  @Column()
  image: string
  
  @Column({ type: 'float' })
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