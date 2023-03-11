import { uuid } from "uuidv4";

export class BankAnalysis {
  
  public readonly id: any
  public maximum?: number
  public minimum?: number
  public avgDay?: number
  public avgWeek?: number
  public avgService?: number
  public dateStart: Date
  public idBank: any

  constructor(props: Omit<BankAnalysis, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}