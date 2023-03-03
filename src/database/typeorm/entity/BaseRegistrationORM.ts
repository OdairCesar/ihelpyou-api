import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { CityORM } from "./CityORM"
import { AuthORM } from "./AuthORM"

@Entity('base_registration')
export class BaseRegistrationORM {
  
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  name: string

  @Column()
  fone: number

  @Column()
  image: string

  @Column()
  address: string

  @Column()
  addressNumber: number

  @Column()
  neighborhood: string 

  @Column()
  active: boolean

  @ManyToOne(type => CityORM, baseRegistrations => BaseRegistrationORM)
  city: CityORM

  @OneToOne(type => AuthORM, baseRegistration => BaseRegistrationORM)
  @JoinColumn()
  auth: AuthORM
}