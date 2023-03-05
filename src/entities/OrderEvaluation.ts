import { uuid } from "uuidv4";

export class OrderEvaluation {

  public readonly id: any
  public title: Date
  public description: string
  public amountStars: number
  public idUser: any
  public idOrder: any
  public idCompanyService: any

  constructor(props: Omit<OrderEvaluation, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}