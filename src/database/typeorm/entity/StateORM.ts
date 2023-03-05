import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { CityORM } from "./CityORM"

@Entity('state')
export class StateORM {
  
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  name: string

  @Column()
  country: string

  @OneToMany(type => CityORM, state => StateORM)
  BaseRegistrations: CityORM[]

}