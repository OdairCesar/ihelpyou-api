import { Auth } from "../entities/Auth"

export interface IAuthRepository {
  findById(id: string): Promise<Auth>
  findByEmail(email: string): Promise<Auth>
  findByTipo(tipo: string): Promise<Array<Auth>>
  findByGoogle(google: string): Promise<Auth>
  findByFacebook(facebook: string): Promise<Auth>
  insert(auth: Auth): Promise<void>
  update(auth: Auth): Promise<void>
}