import { IAuthRepository } from "../../../repositories/IAuthRepository";
import { Auth } from "../../../entities/Auth";
import { ICreateAuthRequestDTO } from "./CreateAuthDTO";

export class CreateAuthUseCase {
  constructor (
    private authRepository: IAuthRepository,
  ) {}

  async execute(data: ICreateAuthRequestDTO) {
    const authEmailAlreadyExists = await this.authRepository.findByEmail(data.email)
    if (authEmailAlreadyExists) throw new Error('User email already exists')

    if (data.google) {
      const authGoogleAlreadyExists = await this.authRepository.findByGoogle(data.google)
      if (authGoogleAlreadyExists) throw new Error('User google already exists')
    }

    if (data.facebook) {
      const authFacebookAlreadyExists = await this.authRepository.findByGoogle(data.facebook)
      if (authFacebookAlreadyExists) throw new Error('User google already exists')
    }

    const auth = new Auth(data)

    await this.authRepository.insert(auth)
  }
}