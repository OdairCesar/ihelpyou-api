export interface ICreateCompanyRequestDTO {
  name: string
  description?: string
  mei?: number
  cnpj?: number
  cpf?: number
  idBaseRegistration: string
  idStatus?: string
}