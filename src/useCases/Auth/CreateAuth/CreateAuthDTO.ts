export interface ICreateAuthRequestDTO {
  email: string,
  password: string,
  confirmPassword: string,
  type: 'Admin' | 'User' | 'Company',
}