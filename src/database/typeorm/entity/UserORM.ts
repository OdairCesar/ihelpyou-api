import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderORM } from "./OrderORM";

@Entity('user')
export class UserORM {

  @PrimaryGeneratedColumn()
  id: string
  
  @Column()
  cpf: number
  
  idBaseRegistration: string

  @OneToMany(type => OrderORM, user => UserORM)
  orders: OrderORM[]
}