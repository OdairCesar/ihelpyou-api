import { uuid } from "uuidv4";

export class ServiceAnalysis {

  public readonly id: string
  public qutd_av_day: number
  public qutd_av_week: number
  public qutd_av_month: number
  public time_m_per_user: string
  public views: number
  public purchase_cancelled: number

  constructor(props: Omit<ServiceAnalysis, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}