import { IBaseRegistrationRepository } from "../../../repositories/IBaseRegistrationRepository";
import { BaseRegistration } from "../../../entities/BaseRegistration";
import { IReadBaseRegistrationRequestDTO } from "./ReadBaseRegistrationDTO";

export class ReadBaseRegistrationUseCase {
  constructor (
    private BaseRegistrationRepository: IBaseRegistrationRepository,
  ) {}

  async execute(data: IReadBaseRegistrationRequestDTO) {
    let basesRegistration: BaseRegistration[] = []

    if (data.id) {

      let line = await this.BaseRegistrationRepository.findById(data.id)
      if (line) basesRegistration.push(line);

    } else if (data.idAuth) {

      let line = await this.BaseRegistrationRepository.findByIdLogin(data.idAuth)
      if (line) basesRegistration.push(line);

    } else if (data.idCity) {

      let lines = await this.BaseRegistrationRepository.findByIdCidade(data.idCity)
      if (lines) basesRegistration = lines

    }

    if (basesRegistration.length > 0) return basesRegistration

    throw new Error('Não houve resultado nas buscas')
  }
}