import { uuid } from "uuidv4";

export class PlatformPlan {

  public readonly id: any
  public name: string
  public description?: string
  public periodInMonth: number
  public limit: string
  public value: number

  constructor(props: Omit<PlatformPlan, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}