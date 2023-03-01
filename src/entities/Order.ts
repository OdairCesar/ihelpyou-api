import { uuid } from "uuidv4";

export class Order {

  public readonly id: string
  public data_start: Date
  public data_finish: Date
  public stt_service: string
  public stt_payment: string
  public id_bank: string
  public id_card: string
  public id_user: string
  public id_company_service: string
  public id_order_evalution: string

  constructor(props: Omit<Order, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}