export class City {
  
  public readonly id: string
  public city: string
  public idState: string

  constructor(props: Omit<City, 'id'>, id: string) {
    Object.assign(this, props)
  }
}