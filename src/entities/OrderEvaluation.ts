import { uuid } from "uuidv4";

export class OrderEvaluation {

  public readonly id: string
  public title: Date
  public description: Date
  public stars: string
  public idUser: string
  public idCompanyService: string

  constructor(props: Omit<OrderEvaluation, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}