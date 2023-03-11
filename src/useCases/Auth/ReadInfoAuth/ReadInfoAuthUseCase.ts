import { IAuthRepository } from "../../../repositories/IAuthRepository";
import { Auth } from "../../../entities/Auth";
import { IReadInfoAuthRequestDTO } from "./ReadInfoAuthDTO";

export class ReadInfoAuthUseCase {
  constructor (
    private authRepository: IAuthRepository,
  ) {}

  async execute(data: IReadInfoAuthRequestDTO) {
    let auth: Auth;

    if (data.id) {
      auth = await this.authRepository.findById(data.id)
    } else if (data.email) {
      auth = await this.authRepository.findByEmail(data.email)
    } else if (data.google) {
      auth = await this.authRepository.findByGoogle(data.google)
    } else if (data.facebook) {
      auth = await this.authRepository.findByFacebook(data.facebook)
    }

    auth.password = null

    if (auth) return auth

    throw new Error('User does not exist')
  }
}