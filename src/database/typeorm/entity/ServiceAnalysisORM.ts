import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ServiceORM } from "./ServiceORM";

@Entity('service_analysis')
export class ServiceAnalysisORM {
  
  @PrimaryGeneratedColumn("uuid")
  id: string
  
  @Column()
  amountAvgDay: number
  
  @Column()
  amountAvgWeek: number
  
  @Column()
  amountAvgMonth: number
  
  @Column()
  timeMdPerUser: string
  
  @Column()
  views: number
  
  @Column()
  purchaseCancelled: number

  @ManyToOne(type => ServiceORM, serviceAnalyzes => ServiceAnalysisORM)
  idService: ServiceORM
  
}