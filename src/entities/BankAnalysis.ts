import { uuid } from "uuidv4";

export class BankAnalisys {
  
  public readonly id: string
  public maximo: string
  public minimo: string
  public av_day: 'Admin' | 'User' | 'Company'
  public av_week: string
  public av_month: string
  public av_service: string

  constructor(props: Omit<BankAnalisys, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = uuid()
    }
  }
}