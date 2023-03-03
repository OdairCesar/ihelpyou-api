import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { BankCompanyORM } from "./BankCompanyORM"
import { CompanyServiceORM } from "./CompanyServiceORM"
import { UserCardORM } from "./UserCardORM"
import { UserORM } from "./UserORM"

@Entity('order')
export class OrderORM {
  
  @PrimaryGeneratedColumn()
  id: string
  
  @Column()
  dataStart: Date
  
  @Column()
  dataFinish: Date
  
  @Column()
  sttService: string
  
  @Column()
  sttPayment: string
  
  @ManyToOne(type => BankCompanyORM, orders => OrderORM)
  banksCompany: BankCompanyORM
  
  @ManyToOne(type => UserCardORM, orders => OrderORM)
  userCard: UserCardORM
  
  @ManyToOne(type => UserORM, orders => OrderORM)
  user: UserORM
  
  @ManyToOne(type => CompanyServiceORM, orders => OrderORM)
  companyService: CompanyServiceORM
  
  
  idOrderEvalution: string
}