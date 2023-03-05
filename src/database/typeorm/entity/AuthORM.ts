import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { BaseRegistrationORM } from "./BaseRegistrationORM";

@Entity('auth')
export class AuthORM{
  
  @PrimaryGeneratedColumn("uuid")
  id: string;
  
  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  type: 'Admin' | 'User' | 'Company';

  @Column()
  google?: string;

  @Column()
  facebook?: string;

  @OneToOne(type => BaseRegistrationORM, auth => AuthORM)
  baseRegistration: BaseRegistrationORM
}