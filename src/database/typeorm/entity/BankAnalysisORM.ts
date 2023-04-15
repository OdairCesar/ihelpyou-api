import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { BankCompanyORM } from "./BankCompanyORM"

@Entity('bank_analysis')
export class BankAnalysisORM {
  
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ type: "float", nullable: true })
  maximum: number

  @Column({ type: "float", nullable: true })
  minimum: number

  @Column({ type: "float", nullable: true })
  avgDay: number

  @Column({ type: "float", nullable: true })
  avgWeek: number

  @Column({ type: "float", nullable: true })
  avgService: number

  @Column()
  dateStart: Date

  @ManyToOne(type => BankCompanyORM, bankAnalyzes => BankAnalysisORM)
  idBank: BankCompanyORM

}