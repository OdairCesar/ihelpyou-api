import { uuid } from "uuidv4";

export class BankCompany {
  
  public readonly id: any
  public bank: number
  public bankHolder: string
  public cpf: number
  public cnpj: number
  public agency: number
  public account: number
  public pix?: string
  public idCompany: any

  constructor(props: Omit<BankCompany, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}