import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('company_department')
export class CompanyDepartmentORM {
  
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ name: 'id_company'})
  idCompany: string

  @Column({ name: 'id_department'})
  idDepartment: string
  
}