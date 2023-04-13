export interface ICreateServiceRequestDTO {
  name: string
  description?: string
  minTimeInDay?: number
  maxTimeInDay?: number
  image: string
  value: number
  idDepartment: string
  idCompany: string
}