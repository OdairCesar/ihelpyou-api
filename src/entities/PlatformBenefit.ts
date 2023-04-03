import { uuid } from "uuidv4";

export class PlatformBenefit {

  public readonly id: any
  public name: string
  public description?: string
  public amount: number
  public idPlan: any

  constructor(props: Omit<PlatformBenefit, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}