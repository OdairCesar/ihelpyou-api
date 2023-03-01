import { uuid } from "uuidv4";

export class Auth {
  
  public readonly id: string
  public email: string
  public password: string
  public type: 'Admin' | 'User' | 'Company'
  public google: string
  public facebook: string

  constructor(props: Omit<Auth, 'id'>, id?: string) {
    if (!id) {
      this.id = uuid()
    }
  }
}