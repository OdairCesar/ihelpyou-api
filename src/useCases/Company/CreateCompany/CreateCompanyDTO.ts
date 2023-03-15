export interface ICreateCompanyRequestDTO {
  id: string
  name: string
  description?: string
  mei?: number
  cnpj?: number
  cpf?: number
  idBaseRegistration: string
  idStatus?: string
}