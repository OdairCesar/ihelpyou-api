export class State {

  public readonly id: string
  public name: string
  public country: string

  constructor(props: Omit<State, 'id'>, id: string) {
    Object.assign(this, props)
  }
}