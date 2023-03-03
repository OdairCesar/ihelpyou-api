import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

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
  

  idCompanyService: string
}