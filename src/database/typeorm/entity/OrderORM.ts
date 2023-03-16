import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { BankCompanyORM } from "./BankCompanyORM"
import { ServiceORM } from "./ServiceORM"
import { UserCardORM } from "./UserCardORM"
import { UserORM } from "./UserORM"
import { OrderEvaluationORM } from "./OrderEvaluationORM"

@Entity('order')
export class OrderORM {
  
  @PrimaryGeneratedColumn("uuid")
  id: string
  
  @Column()
  dataStart: Date
  
  @Column()
  dataFinish: Date
  
  @Column()
  sttService: 'Cancelado' | 'Concluido' | 'Em andamento' | 'Confirmado' | 'Esperando Confirmação'
  
  @Column()
  sttPayment: 'Cancelado' | 'Confirmado' | 'Aguardado'
  
  @OneToMany(type => OrderEvaluationORM, order => OrderORM)
  orderReviews: OrderEvaluationORM[]
  
  @ManyToOne(type => BankCompanyORM, orders => OrderORM)
  idBankCompany: BankCompanyORM
  
  @ManyToOne(type => UserCardORM, orders => OrderORM)
  idUserCard: UserCardORM
  
  @ManyToOne(type => UserORM, orders => OrderORM)
  idUser: UserORM
  
  @ManyToOne(type => ServiceORM, orders => OrderORM)
  idService: ServiceORM
  
}