import { uuid } from "uuidv4";

export class Department {

  public readonly id: any
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