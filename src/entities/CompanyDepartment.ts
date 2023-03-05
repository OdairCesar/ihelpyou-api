import { uuid } from "uuidv4";

export class CompanyDepartment {
  
  public readonly id: any
  public idCompany: any
  public idDepartment: any

  constructor(props: Omit<CompanyDepartment, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}