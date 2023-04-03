export interface ICreatePlatformBenefitRequestDTO {
  id: string
  name: string
  description?: string
  amount: number
  idPlan: string
}