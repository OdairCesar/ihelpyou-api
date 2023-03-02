import { uuid } from "uuidv4";

export class PlatformBenefit {

  public readonly id: string
  public title: string
  public description: string
  public stars: number
  public idUser: string
  public idCompanyService: string

  constructor(props: Omit<PlatformBenefit, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}