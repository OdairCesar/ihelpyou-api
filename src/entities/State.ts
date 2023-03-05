import { uuid } from "uuidv4"

export class State {

  public readonly id: any
  public name: string
  public country: string

  constructor(props: Omit<State, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}