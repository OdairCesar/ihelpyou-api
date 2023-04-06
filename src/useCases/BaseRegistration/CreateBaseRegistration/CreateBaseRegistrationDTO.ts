export interface ICreateBaseRegistrationRequestDTO {
  name: string
  fone: number
  image?: string
  address: string
  addressNumber: number
  neighborhood: string 
  active: boolean
  idCity: string
  idAuth: string
}