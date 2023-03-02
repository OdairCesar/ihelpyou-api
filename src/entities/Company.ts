import { uuid } from "uuidv4";

export class Company {
  
  public readonly id: string
  public description: string
  public mei: number
  public cnpj: number
  public cpf: number
  public idBaseRegistration: string
  public idStatus: string

  constructor(props: Omit<Company, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}