import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {

  @PrimaryGeneratedColumn()
  id: string
  
  @Column()
  cpf: number
  
  idBaseRegistration: string
}