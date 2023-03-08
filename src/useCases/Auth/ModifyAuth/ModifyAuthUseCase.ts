import { Auth } from "../../../entities/Auth";
import { IAuthRepository } from "../../../repositories/IAuthRepository";
import { IModifyAuthRequestDTO } from "./ModifyAuthDTO";

export class ModifyAuthUseCase {
  constructor (
    private authRepository: IAuthRepository,
  ) {}

  async execute(data: IModifyAuthRequestDTO) {
    if (!this.validEmail(data.email)) {
      throw Error("Email invalido");
    }

    const auth = await this.authRepository.findById(data.id);

    if (!auth) {
      throw Error("Usuario não Existe");
    }

    auth.email = data.email
    if (data.google) auth.google = data.google
    if (data.facebook) auth.facebook = data.facebook
    
    await this.authRepository.update(auth)
  }

  validEmail(email) {
    const padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return padrao.test(email);
  }
}