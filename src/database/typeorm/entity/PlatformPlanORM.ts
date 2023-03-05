import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CompanyStatusORM } from "./CompanyStatusORM";
import { PlatformBenefitORM } from "./PlatformBenefitORM";

@Entity('platform_plan')
export class PlatformPlanORM {

  @PrimaryGeneratedColumn("uuid")
  id: string
  
  @Column()
  name: string
  
  @Column()
  description: string
  
  @Column()
  period: string
  
  @Column()
  limit: string
  
  @Column()
  value: string
  
  @OneToMany(type => CompanyStatusORM, platformPlan => PlatformPlanORM)
  companiesStatus: CompanyStatusORM[]

  @OneToMany(type => PlatformBenefitORM, platformPlan => PlatformPlanORM)
  platformBenfits: PlatformBenefitORM[]
  
}