import { uuid } from "uuidv4";

export class CompanyService {
  
  public readonly id: any
  public name: string
  public description: string
  public minTime: string
  public maxTime: string
  public image: string
  public value: number
  public idDepartment: any
  public idCompany: any

  constructor(props: Omit<CompanyService, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}