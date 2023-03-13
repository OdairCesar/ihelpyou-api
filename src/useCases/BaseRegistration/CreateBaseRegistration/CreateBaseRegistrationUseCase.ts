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
    const auth = this.authRepository.findById(data.idAuth)
    const authBase = this.baseRegistrationRepository.findByIdLogin(data.idAuth)

    if (!auth) {
      throw Error('Não foi possivel encontrar o login para fazer o cadastro')
    }

    if (authBase) {
      throw Error('Já possui usuario com esse login')
    }


    const baseRegistration = new BaseRegistration(data)

    this.baseRegistrationRepository.insert(baseRegistration)
  }
}