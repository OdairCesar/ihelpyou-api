import { uuid } from "uuidv4";

export class Company {
  
  public readonly id: any
  public name: string
  public description?: string
  public mei?: number
  public cnpj?: number
  public cpf?: number
  public idBaseRegistration: any
  public idStatus?: any

  constructor(props: Omit<Company, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}