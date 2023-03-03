import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { CompanyServiceORM } from "./CompanyServiceORM"

@Entity('order_evalution')
export class OrderEvaluationORM {

  @PrimaryGeneratedColumn()
  id: string
  
  @Column()
  title: Date
  
  @Column()
  description: Date
  
  @Column()
  stars: string
  
  @Column()
  idUser: string
  
  @ManyToOne(type => CompanyServiceORM, orderReviews => OrderEvaluationORM)
  companyService: CompanyServiceORM
}