import { uuid } from "uuidv4";

export class CompanyStatus {
  
  public readonly id: string
  public pago: boolean
  public restriction: boolean
  public accession_date: Date
  public active: boolean
  public id_plan: string

  constructor(props: Omit<CompanyStatus, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}