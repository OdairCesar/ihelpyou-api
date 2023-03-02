import { uuid } from "uuidv4";

export class PlatformPlan {

  public readonly id: string
  public name: string
  public description: string
  public period: string
  public limit: string
  public value: string
  public idPlatformBenefit: string

  constructor(props: Omit<PlatformPlan, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}