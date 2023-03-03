import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('user_card')
export class UserCard {

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
}