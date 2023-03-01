import { uuid } from "uuidv4";

export class UserCard {

  public readonly id: string
  public number_card: number
  public name: string
  public validity: Date
  public security_code: number
  public id_user: string

  constructor(props: Omit<UserCard, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}