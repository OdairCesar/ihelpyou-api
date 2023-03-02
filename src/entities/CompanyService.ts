import { uuid } from "uuidv4";

export class CompanyService {
  
  public readonly id: string
  public name: string
  public description: string
  public minTime: string
  public maxTime: string
  public image: string
  public value: number
  public idAnalysis: string
  public idDepartment: string
  public idCompany: string

  constructor(props: Omit<CompanyService, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}