import { uuid } from "uuidv4";

export class ServiceAnalysis {

  public readonly id: string
  public amountAvgDay: number
  public amountAvgWeek: number
  public amountAvgMonth: number
  public timeMdPerUser: string
  public views: number
  public purchaseCancelled: number

  constructor(props: Omit<ServiceAnalysis, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}