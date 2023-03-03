import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('order')
export class Order {
  
  @PrimaryGeneratedColumn()
  id: string
  
  @Column()
  dataStart: Date
  
  @Column()
  dataFinish: Date
  
  @Column()
  sttService: string
  
  @Column()
  sttPayment: string
  
  
  idBankCompany: string
  
  
  idUserCard: string
  
  
  idUser: string
  
  
  idCompanyService: string
  
  
  idOrderEvalution: string
}