import { uuid } from "uuidv4";

export class CompanyService {
  
  public readonly id: string
  public name: string
  public description: string
  public av_time: string
  public max_time: string
  public image: string
  public value: number
  public id_analysis: string
  public id_department: string
  public id_company: string

  constructor(props: Omit<CompanyService, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}