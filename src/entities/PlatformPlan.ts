import { uuid } from "uuidv4";

export class PlatformBenefit {

  public readonly id: string
  public name: string
  public description: string
  public period: string
  public limit: string
  public value: string
  public id_platform_benefit: string

  constructor(props: Omit<PlatformBenefit, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}