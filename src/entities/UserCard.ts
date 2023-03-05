import { uuid } from "uuidv4";

export class UserCard {

  public readonly id: any
  public numberCard: number
  public name: string
  public validity: Date
  public securityCode: number
  public idUser: any

  constructor(props: Omit<UserCard, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}