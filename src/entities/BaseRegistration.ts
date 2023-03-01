import { uuid } from "uuidv4";

export class BaseRegistration {
  
  public readonly id: string
  public name: string
  public fone: number
  public image: string
  public address: string
  public address_number: number
  public neighborhood: string 
  public active: boolean
  public id_city: string
  public id_auth: string

  constructor(props: Omit<BaseRegistration, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}