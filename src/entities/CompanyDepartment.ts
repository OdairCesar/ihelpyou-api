import { uuid } from "uuidv4";

export class CompanyDepartment {
  
  public readonly id: string
  public id_company: string
  public id_department: string

  constructor(props: Omit<CompanyDepartment, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}