import { uuid } from "uuidv4";

export class BankAnalysis {
  
  public readonly id: any
  public maximo: string
  public minimo: string
  public avDay: 'Admin' | 'User' | 'Company'
  public avWeek: string
  public avMonth: string
  public avService: string
  public idBank: string

  constructor(props: Omit<BankAnalysis, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}