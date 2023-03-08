import { IAuthRepository } from "../../../repositories/IAuthRepository";
import { Auth } from "../../../entities/Auth";
import { ICreateAuthRequestDTO } from "./CreateAuthDTO";

export class CreateAuthUseCase {
  constructor(private authRepository: IAuthRepository) {}

  async execute(data: ICreateAuthRequestDTO) {
    if (!await this.validExists(data.email)) {
      throw Error("Usuario ja existente");
    }

    if (!this.validEmail(data.email)) {
      throw Error("Email invalido");
    }

    if (!this.validConfirmPassword(data.password, data.confirmPassword)) {
      throw Error("A senha de cnfirmação esta errada");
    }

    if (!this.validPassword(data.password)) {
      throw Error("A senha está fraca");
    }

    const auth = new Auth(data);

    await this.authRepository.insert(auth);
  }

  async validExists(email) {
    const authEmailAlreadyExists = await this.authRepository.findByEmail(email);

    if (authEmailAlreadyExists) {
      return false;
    }

    return true;
  }

  validConfirmPassword(password, confirmPassword) {
    return password == confirmPassword
  }

  validEmail(email) {
    const padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return padrao.test(email);
  }

  validPassword(password) {
    const numberRule = /[0-9]/;
    const specialCharacterRule = /[!@#$%^&*]/;
    const capitalLetterRule = /[A-Z]/;

    if (password.length < 8 || password.length > 16) {
      return false;
    }

    if (
      !numberRule.test(password) ||
      !specialCharacterRule.test(password) ||
      !capitalLetterRule.test(password)
    ) {
      return false;
    }

    return true;
  }
}
