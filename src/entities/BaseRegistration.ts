import { uuid } from "uuidv4";

export class BaseRegistration {
  
  public readonly id: any
  public name: string
  public fone: number
  public image?: string
  public address: string
  public addressNumber: number
  public neighborhood: string 
  public active: boolean
  public idCity: any
  public idAuth: any

  constructor(props: Omit<BaseRegistration, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}