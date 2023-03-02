import { uuid } from "uuidv4";

export class Order {

  public readonly id: string
  public dataStart: Date
  public dataFinish: Date
  public sttService: string
  public sttPayment: string
  public idBankCompany: string
  public idUserCard: string
  public idUser: string
  public idCompanyService: string
  public idOrderEvalution: string

  constructor(props: Omit<Order, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}