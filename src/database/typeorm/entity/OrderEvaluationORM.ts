import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { CompanyServiceORM } from "./CompanyServiceORM"
import { UserORM } from "./UserORM"
import { OrderORM } from "./OrderORM"

@Entity('order_evalution')
export class OrderEvaluationORM {

  @PrimaryGeneratedColumn("uuid")
  id: string
  
  @Column()
  title: Date
  
  @Column()
  description: string
  
  @Column()
  amountStars: number
  
  @ManyToOne(type => UserORM, orderReviews => OrderEvaluationORM)
  idUser: UserORM
  
  @ManyToOne(type => OrderORM, orderReviews => OrderEvaluationORM)
  idOrder: OrderORM
  
  @ManyToOne(type => CompanyServiceORM, orderReviews => OrderEvaluationORM)
  idCompanyService: CompanyServiceORM
  
}