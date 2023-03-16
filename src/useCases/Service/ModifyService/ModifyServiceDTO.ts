export interface IModifyServiceRequestDTO {
  id: string
  name?: string
  description?: string
  minTime?: string
  maxTime?: string
  image?: string
  value?: number
  idDepartment?: string
  idCompany?: string
}