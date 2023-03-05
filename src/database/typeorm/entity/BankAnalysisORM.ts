import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { BankCompanyORM } from "./BankCompanyORM"

@Entity('bank_analysis')
export class BankAnalysisORM {
  
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  maximum: number

  @Column()
  minimum: number

  @Column()
  avDay: number

  @Column()
  avWeek: number

  @Column()
  avService: number

  @ManyToOne(type => BankCompanyORM, bankAnalyzes => BankAnalysisORM)
  idBank: BankCompanyORM

}