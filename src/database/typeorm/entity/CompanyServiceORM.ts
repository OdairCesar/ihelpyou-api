import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { ServiceAnalysisORM } from "./ServiceAnalysisORM"
import { DepartmentORM } from "./DepartmentORM"
import { CompanyORM } from "./CompanyORM"

@Entity('company_service')
export class CompanyServiceORM {
  
  @PrimaryGeneratedColumn()
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
  
  @OneToMany(type => ServiceAnalysisORM, companyService => CompanyServiceORM)
  serviceAnalyzes: ServiceAnalysisORM[]
  
  @ManyToOne(type => DepartmentORM, companyServices => CompanyServiceORM)
  department: DepartmentORM
  
  @ManyToOne(type => CompanyORM, companyServices => CompanyServiceORM)
  company: CompanyORM
}