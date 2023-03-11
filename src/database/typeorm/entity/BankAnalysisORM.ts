import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { BankCompanyORM } from "./BankCompanyORM"

@Entity('bank_analysis')
export class BankAnalysisORM {
  
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ nullable: true })
  maximum: number

  @Column({ nullable: true })
  minimum: number

  @Column({ nullable: true })
  avgDay: number

  @Column({ nullable: true })
  avgWeek: number

  @Column({ nullable: true })
  avgService: number

  @Column()
  dateStart: Date

  @ManyToOne(type => BankCompanyORM, bankAnalyzes => BankAnalysisORM)
  idBank: BankCompanyORM

}