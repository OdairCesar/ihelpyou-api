import { BaseRegistration } from "../../../entities/BaseRegistration";
import { IAuthRepository } from "../../../repositories/IAuthRepository";
import { IBaseRegistrationRepository } from "../../../repositories/IBaseRegistrationRepository";
import { ICreateBaseRegistrationRequestDTO } from "./CreateBaseRegistrationDTO"

export class CreateBaseRegistrationUseCase {
  constructor(
    private baseRegistrationRepository: IBaseRegistrationRepository,
    private authRepository: IAuthRepository,
  ) { }

  async execute(data: ICreateBaseRegistrationRequestDTO) {
    const auth = await this.authRepository.findById(data.idAuth)
    const authBase = await this.baseRegistrationRepository.findByIdLogin(data.idAuth)

    if (!auth) {
      throw new Error('Não foi possivel encontrar o login para fazer o cadastro')
    }

    if (authBase) {
      throw new Error('Já possui usuario com esse login')
    }

    if (data.fone.toString().length > 10 || data.fone.toString().length < 8 ) {
      throw new Error('Numero de telefone inválido')
    }

    const baseRegistration = new BaseRegistration(data)

    await this.baseRegistrationRepository.insert(baseRegistration)
  }
}