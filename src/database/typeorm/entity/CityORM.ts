import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { BaseRegistrationORM } from "./BaseRegistrationORM"
import { StateORM } from "./StateORM"

@Entity('city')
export class CityORM {
  
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  city: string

  @ManyToOne(type => StateORM, cities => CityORM)
  state: StateORM

  @OneToMany(type => BaseRegistrationORM, city => CityORM)
  BaseRegistrations: BaseRegistrationORM[]
}