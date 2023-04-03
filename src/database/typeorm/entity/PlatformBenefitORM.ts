import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { PlatformPlanORM } from "./PlatformPlanORM"

@Entity('platform_benefit')
export class PlatformBenefitORM {

  @PrimaryGeneratedColumn("uuid")
  id: string
  
  @Column()
  name: string
  
  @Column({ nullable: true })
  description: string
  
  @Column()
  amount: number

  @ManyToOne(type => PlatformPlanORM, platformBenefits => PlatformBenefitORM)
  idPlan: PlatformPlanORM
  
}