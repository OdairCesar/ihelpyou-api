import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('platform_benefit')
export class PlatformBenefit {

  @PrimaryGeneratedColumn()
  id: string
  
  @Column()
  title: string
  
  @Column()
  description: string
  
  @Column()
  stars: number

  idUser: string

  idCompanyService: string
}