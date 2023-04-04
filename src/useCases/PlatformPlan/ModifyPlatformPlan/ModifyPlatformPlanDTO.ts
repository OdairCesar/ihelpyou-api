export interface IModifyPlatformPlanRequestDTO {
  id: string
  name?: string
  description?: string
  periodInMonth?: number
  limit?: string
  value?: number
}