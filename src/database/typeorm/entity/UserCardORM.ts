import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { OrderORM } from "./OrderORM"

@Entity('user_card')
export class UserCardORM {

  @PrimaryGeneratedColumn()
  id: string
  
  @Column()
  numberCard: number
  
  @Column()
  name: string
  
  @Column()
  validity: Date
  
  @Column()
  securityCode: number
  
  idUser: string

  @OneToMany(type => OrderORM, userCard => UserCardORM)
  orders: OrderORM[]
}