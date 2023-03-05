import { uuid } from "uuidv4"

export class City {
  
  public readonly id: any
  public city: string
  public idState: any

  constructor(props: Omit<City, 'id'>, id: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}