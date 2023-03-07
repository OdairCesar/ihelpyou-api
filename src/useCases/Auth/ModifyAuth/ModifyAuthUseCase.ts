import { IAuthRepository } from "../../../repositories/IAuthRepository";
import { IModifyAuthRequestDTO } from "./ModifyAuthDTO";

export class ModifyAuthUseCase {
  constructor (
    private authRepository: IAuthRepository,
  ) {}

  async execute(data: IModifyAuthRequestDTO) {
    const auth = await this.authRepository.findById(data.id)

    if (!auth) {
      throw new Error('User does not exist')
    }

    if (data.email) auth.email = data.email
    if (data.google) auth.google = data.google
    if (data.facebook) auth.facebook = data.facebook
    
    await this.authRepository.update(auth)
  }
}