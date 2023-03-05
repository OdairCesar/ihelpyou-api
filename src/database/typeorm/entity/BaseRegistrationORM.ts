import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { CityORM } from "./CityORM"
import { AuthORM } from "./AuthORM"
import { CompanyORM } from "./CompanyORM"
import { UserORM } from "./UserORM"

@Entity('base_registration')
export class BaseRegistrationORM {
  
  @PrimaryGeneratedColumn("uuid")
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

  @OneToOne(type => CompanyORM, baseRegistration => BaseRegistrationORM)
  company: CompanyORM

  @OneToOne(type => UserORM, baseRegistration => BaseRegistrationORM)
  user: UserORM

  @OneToOne(type => AuthORM, baseRegistration => BaseRegistrationORM)
  @JoinColumn()
  idAuth: AuthORM

  @ManyToOne(type => CityORM, baseRegistrations => BaseRegistrationORM)
  idCity: CityORM
  
}