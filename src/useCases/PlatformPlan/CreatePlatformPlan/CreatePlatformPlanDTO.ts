export interface ICreatePlatformPlanRequestDTO {
  name: string
  description?: string
  periodInMonth: number
  limit: string
  value: number
}