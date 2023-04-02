import { uuid } from "uuidv4";

export class OrderEvaluation {

  public readonly id: any
  public title?: string
  public description?: string
  public date: Date
  public amountStars: number
  public idUser: any
  public idOrder: any
  public idService: any

  constructor(props: Omit<OrderEvaluation, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}