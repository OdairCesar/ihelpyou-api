import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('platform_plan')
export class PlatformPlan {

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
  
  idPlatformBenefit: string
}