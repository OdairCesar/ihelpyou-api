import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { OrderORM } from "./OrderORM"
import { UserORM } from "./UserORM"

@Entity('user_card')
export class UserCardORM {

  @PrimaryGeneratedColumn("uuid")
  id: string
  
  @Column()
  numberCard: number
  
  @Column()
  name: string
  
  @Column()
  validity: Date
  
  @Column()
  securityCode: number

  @OneToMany(type => OrderORM, userCard => UserCardORM)
  orders: OrderORM[]
  
  @ManyToOne(type => UserORM, userCards => UserCardORM)
  idUser: UserORM

}