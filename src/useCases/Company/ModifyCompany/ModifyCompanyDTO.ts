export interface IModifyCompanyRequestDTO {
  id: string
  name?: string
  description?: string
  cnpj?: number
  cpf?: number
  mei?: number
  idStatus?: string
}