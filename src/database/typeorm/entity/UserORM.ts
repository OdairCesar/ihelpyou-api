import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrderORM } from "./OrderORM";
import { OrderEvaluationORM } from "./OrderEvaluationORM";
import { UserCardORM } from "./UserCardORM";
import { BaseRegistrationORM } from "./BaseRegistrationORM";

@Entity('user')
export class UserORM {

  @PrimaryGeneratedColumn("uuid")
  id: string
  
  @Column()
  cpf: number
  
  @OneToOne(type => BaseRegistrationORM, user => UserORM)
  @JoinColumn()
  idBaseRegistration: BaseRegistrationORM

  @OneToMany(type => OrderORM, user => UserORM)
  orders: OrderORM[]
  
  @OneToMany(type => OrderEvaluationORM, user => UserORM)
  orderReviews: OrderEvaluationORM[]

  @OneToMany(type => UserCardORM, user => UserORM)
  userCards: UserCardORM[]
  
}