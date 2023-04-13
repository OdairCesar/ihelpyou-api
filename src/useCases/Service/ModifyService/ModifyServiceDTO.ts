export interface IModifyServiceRequestDTO {
  id: string
  name?: string
  description?: string
  minTimeInDay?: number
  maxTimeInDay?: number
  image?: string
  value?: number
  idDepartment?: string
}