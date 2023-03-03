import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { BankCompanyORM } from "./BankCompanyORM"

@Entity('bank_analysis')
export class BankAnalysisORM {
  
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  maximo: string

  @Column()
  minimo: string

  @Column()
  avDay: 'Admin' | 'User' | 'Company'

  @Column()
  avWeek: string

  @Column()
  avMonth: string

  @Column()
  avService: string

  @ManyToOne(type => BankCompanyORM, bankAnalyzes => BankAnalysisORM)
  bank: BankCompanyORM
}