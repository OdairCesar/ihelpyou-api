import { uuid } from "uuidv4";

export class Auth {
  
  public readonly id: any
  public email: string
  public password: string
  public type: 'Admin' | 'User' | 'Company'
  public google: string
  public facebook: string

  constructor(props: Omit<Auth, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}