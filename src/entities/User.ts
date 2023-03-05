import { uuid } from "uuidv4";

export class User {

  public readonly id: any
  public cpf: number
  public idBaseRegistration: any

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}