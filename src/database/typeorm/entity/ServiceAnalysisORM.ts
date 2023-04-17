import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ServiceORM } from "./ServiceORM";

@Entity('service_analysis')
export class ServiceAnalysisORM {
  
  @PrimaryGeneratedColumn("uuid")
  id: string
  
  @Column({ nullable: true })
  amountAvgDay: number
  
  @Column({ nullable: true })
  amountAvgWeek: number
  
  @Column({ nullable: true })
  amountAvgMonth: number
  
  @Column({ nullable: true })
  timeMdPerUser: string
  
  @Column({ nullable: true })
  views: number
  
  @Column({ nullable: true })
  purchaseCancelled: number

  @Column()
  date: Date

  @ManyToOne(type => ServiceORM, serviceAnalyzes => ServiceAnalysisORM)
  idService: ServiceORM
  
}