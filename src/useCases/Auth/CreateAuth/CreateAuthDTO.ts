export interface ICreateAuthRequestDTO {
  name: string,
  email: string,
  password: string,
  type: 'Admin' | 'User' | 'Company',
  google: string,
  facebook: string
}