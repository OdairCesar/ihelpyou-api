import { uuid } from "uuidv4";

export class CompanyStatus {
  
  public readonly id: string
  public paid: boolean
  public restriction: boolean
  public dateAdmission: Date
  public activated: boolean
  public idPlan: string

  constructor(props: Omit<CompanyStatus, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}