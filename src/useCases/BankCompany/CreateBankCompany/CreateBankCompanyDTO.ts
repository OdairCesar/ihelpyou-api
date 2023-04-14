export interface ICreateBankCompanyRequestDTO {
  bank: number
  bankHolder: string
  cpf?: number
  cnpj?: number
  agency: number
  account: number
  pix?: string
  idCompany: string
}