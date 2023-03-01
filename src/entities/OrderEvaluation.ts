import { uuid } from "uuidv4";

export class OrderEvalution {

  public readonly id: string
  public title: Date
  public description: Date
  public stars: string
  public id_user: string
  public id_company_service: string

  constructor(props: Omit<OrderEvalution, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}