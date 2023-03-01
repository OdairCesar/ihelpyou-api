import { uuid } from "uuidv4";

export class Company {
  
  public readonly id: string
  public description: string
  public mei: number
  public cnpj: number
  public cpf: number
  public id_base_registration: string
  public id_status: string

  constructor(props: Omit<Company, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}