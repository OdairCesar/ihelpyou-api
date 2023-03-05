import { Repository } from "typeorm";
import { IAuthRepository } from "../../IAuthRepository";
import { AuthORM } from "../../../database/typeorm/entity/AuthORM";
import { Auth } from "../../../entities/Auth";

export class AuthRepository implements IAuthRepository {

  constructor (
    private authRepository: Repository<AuthORM>
  ) { }
  

  async findById(id: any): Promise<Auth> {
    return await this.authRepository.findOneBy({
      id: id,
    });
  }


  async findByEmail(email: string): Promise<Auth> {
    return await this.authRepository.findOneBy({
      email: email,
    });
  }


  async findByType(tipo: 'Admin' | 'User' | 'Company'): Promise<Array<Auth>> {
    return await this.authRepository.findBy({
      type: tipo,
    });
  }


  async findByGoogle(google: string): Promise<Auth> {
    return await this.authRepository.findOneBy({
      google: google,
    });
  }


  async findByFacebook(facebook: string): Promise<Auth> {
    return await this.authRepository.findOneBy({
      facebook: facebook,
    });
  }


  async insert(auth: Auth): Promise<void> {
    await this.authRepository.insert(auth)
  }


  async update(auth: Auth): Promise<void> {
    if (typeof auth.id === 'string') this.authRepository.update({ id: auth.id }, auth)
  }
}
