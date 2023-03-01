export class City {
  
  public readonly id: string
  public city: string
  public id_state: string

  constructor(props: Omit<City, 'id'>, id: string) {
    Object.assign(this, props)
  }
}