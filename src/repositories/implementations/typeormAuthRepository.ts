import { Repository } from "typeorm";
import { IAuthRepository } from "../IAuthRepository"
import { AuthORM } from "../../database/typeorm/entity/AuthORM";
import { Auth } from "../../entities/Auth";

export class AuthRepository implements IAuthRepository {
  constructor (
    private ormRepository: Repository<AuthORM>
  ) {}

  async findById(id: string): Promise<Auth> {
    const auth = await this.ormRepository.findOne({

    })

    return new Auth(auth)
  }

  async findByEmail(email: string): Promise<Auth> {
    return await this.ormRepository.findOne({

    })
  }

  async findByTipo(tipo: string): Promise<Array<Auth>> {
    return await this.ormRepository.find({

    })
  }

  async findByGoogle(google: string): Promise<Auth> {
    return await this.ormRepository.findOne({

    })
  }

  async findByFacebook(facebook: string): Promise<Auth> {
    return await this.ormRepository.findOne({

    })
  }

  async insert(auth: Auth): Promise<void> {
    this.ormRepository.create(auth)
  }

  async update(auth: Auth): Promise<void> {
    this.ormRepository.save(auth)
  }
}