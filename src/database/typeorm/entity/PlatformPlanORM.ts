import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CompanyStatusORM } from "./CompanyStatusORM";

@Entity('platform_plan')
export class PlatformPlanORM {

  @PrimaryGeneratedColumn()
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
}