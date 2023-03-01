import { uuid } from "uuidv4";

export class PlatformBenefit {

  public readonly id: string
  public title: string
  public description: string
  public stars: number
  public id_user: string
  public id_company_service: string

  constructor(props: Omit<PlatformBenefit, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}