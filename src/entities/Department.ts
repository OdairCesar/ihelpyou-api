import { uuid } from "uuidv4";

export class Department {

  public readonly id: string
  public name: string
  public description: string
  public image: string

  constructor(props: Omit<Department, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}