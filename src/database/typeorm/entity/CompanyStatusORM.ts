import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { PlatformPlanORM } from "./PlatformPlanORM"
import { CompanyORM } from "./CompanyORM"

@Entity('company_status')
export class CompanyStatusORM {
  
  @PrimaryGeneratedColumn("uuid")
  id: string
  
  @Column()
  paid: boolean
  
  @Column()
  restriction: boolean
  
  @Column()
  dateAdmission: Date
  
  @Column()
  activated: boolean
  
  @OneToOne(type => CompanyORM, companyStatus => CompanyStatusORM)
  company: CompanyORM
  
  @ManyToOne(type => PlatformPlanORM, companiesStatus => CompanyStatusORM)
  idPlan: PlatformPlanORM
  
}