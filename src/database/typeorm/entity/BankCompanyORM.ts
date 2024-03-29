import { BankAnalysisORM } from "./BankAnalysisORM";
import { CompanyORM } from "./CompanyORM";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderORM } from "./OrderORM";

@Entity('bank_company')
export class BankCompanyORM {
  
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  bank: number

  @Column()
  bankHolder: string

  @Column({ type: "bigint", nullable: true })
  cpf: number

  @Column({ type: "bigint", nullable: true })
  cnpj: number

  @Column()
  agency: number

  @Column()
  account: number

  @Column({ nullable: true})
  pix: string

  @OneToMany(type => BankAnalysisORM, bankCompany => BankCompanyORM)
  bankAnalyzes: BankAnalysisORM[]

  @OneToMany(type => OrderORM, bankCompany => BankCompanyORM)
  orders: OrderORM[]

  @ManyToOne(type => CompanyORM, banksCompany => BankCompanyORM)
  idCompany: CompanyORM

}