import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { PlatformPlanORM } from "./PlatformPlanORM"

@Entity('company_status')
export class CompanyStatusORM {
  
  @PrimaryGeneratedColumn()
  id: string
  
  @Column()
  paid: boolean
  
  @Column()
  restriction: boolean
  
  @Column()
  dateAdmission: Date
  
  @Column()
  activated: boolean
  
  @ManyToOne(type => PlatformPlanORM, companiesStatus => CompanyStatusORM)
  plan: PlatformPlanORM
}