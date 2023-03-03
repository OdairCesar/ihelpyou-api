import { DataSource, Repository } from "typeorm";
import { IAuthRepository } from "../IAuthRepository";
import { AuthORM } from "../../database/typeorm/entity/AuthORM";
import { Auth } from "../../entities/Auth";

export class AuthRepository implements IAuthRepository {
  constructor(private authRepository: Repository<AuthORM>) {}

  async findById(id: any): Promise<Auth> {
    return await this.authRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async findByEmail(email: string): Promise<Auth> {
    return await this.authRepository.findOne({});
  }

  async findByTipo(tipo: string): Promise<Array<Auth>> {
    return await this.authRepository.find({});
  }

  async findByGoogle(google: string): Promise<Auth> {
    return await this.authRepository.findOne({});
  }

  async findByFacebook(facebook: string): Promise<Auth> {
    return await this.authRepository.findOne({});
  }

  async insert(auth: Auth): Promise<void> {
    this.authRepository.create(auth);
  }

  async update(auth: Auth): Promise<void> {
    this.authRepository.save(auth);
  }
}
