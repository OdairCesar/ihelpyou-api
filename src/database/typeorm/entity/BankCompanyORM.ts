import { BankAnalysisORM } from "./BankAnalysisORM";
import { CompanyORM } from "./CompanyORM";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderORM } from "./OrderORM";

@Entity('bank_company')
export class BankCompanyORM {
  
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  bank: number

  @Column()
  bankHolder: string

  @Column()
  cpf: number

  @Column()
  cnpf: number

  @Column()
  agency: number

  @Column()
  account: number

  @Column()
  pix: string

  @ManyToOne(type => CompanyORM, banksCompany => BankCompanyORM)
  company: CompanyORM

  @OneToMany(type => BankAnalysisORM, bankCompany => BankCompanyORM)
  bankAnalyzes: BankAnalysisORM[]

  @OneToMany(type => OrderORM, bankCompany => BankCompanyORM)
  orders: OrderORM[]
}