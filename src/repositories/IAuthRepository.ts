import { Auth } from "../entities/Auth"

export interface IAuthRepository {
  findById(id: any): Promise<Auth>
  findByEmail(email: string): Promise<Auth>
  findByType(tipo:  'Admin' | 'User' | 'Company'): Promise<Array<Auth>>
  findByGoogle(google: string): Promise<Auth>
  findByFacebook(facebook: string): Promise<Auth>
  insert(auth: Auth): Promise<void>
  update(auth: Auth): Promise<void>
}