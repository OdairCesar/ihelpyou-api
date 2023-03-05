import { uuid } from "uuidv4";

export class CompanyStatus {
  
  public readonly id: any
  public paid: boolean
  public restriction: boolean
  public dateAdmission: Date
  public activated: boolean
  public idPlan: any

  constructor(props: Omit<CompanyStatus, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}