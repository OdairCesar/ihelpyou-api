import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { BaseRegistrationORM } from "./BaseRegistrationORM"
import { StateORM } from "./StateORM"

@Entity('city')
export class CityORM {
  
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  city: string

  @OneToMany(type => BaseRegistrationORM, city => CityORM)
  BaseRegistrations: BaseRegistrationORM[]

  @ManyToOne(type => StateORM, cities => CityORM)
  idState: StateORM

}