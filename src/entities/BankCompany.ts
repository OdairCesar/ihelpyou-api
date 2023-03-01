import { uuid } from "uuidv4";

export class BankCompany {
  
  public readonly id: string
  public bank: string
  public bank_holder: string
  public cpf: number
  public cnpf: number
  public agency: number
  public account: number
  public pix: string
  public id_company: string
  public id_analisys: string

  constructor(props: Omit<BankCompany, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}