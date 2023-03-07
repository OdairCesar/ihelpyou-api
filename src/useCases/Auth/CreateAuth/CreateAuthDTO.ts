export interface ICreateAuthRequestDTO {
  email: string,
  password: string,
  type: 'Admin' | 'User' | 'Company',
  google: string,
  facebook: string
}