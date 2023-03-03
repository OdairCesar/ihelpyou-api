import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('company_status')
export class CompanyStatusORM {
  
  @PrimaryGeneratedColumn()
  id: string
  
  @Column()
  paid: boolean
  
  @Column()
  restriction: boolean
  
  @Column()
  dateAdmission: Date
  
  @Column()
  activated: boolean
  

  idPlan: string
}