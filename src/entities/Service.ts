import { uuid } from "uuidv4";

export class Service {
  
  public readonly id: any
  public name: string
  public description?: string
  public minTimeInDay?: number
  public maxTimeInDay?: number
  public image: string
  public value: number
  public idDepartment: any
  public idCompany: any

  constructor(props: Omit<Service, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}