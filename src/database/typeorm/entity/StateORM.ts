import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { CityORM } from "./CityORM"

export class StateORM {
  
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  name: string

  @Column()
  country: string

  @OneToMany(type => CityORM, state => StateORM)
  BaseRegistrations: CityORM[]
}