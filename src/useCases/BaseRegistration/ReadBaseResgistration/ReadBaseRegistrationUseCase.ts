import { IBaseRegistrationRepository } from "../../../repositories/IBaseRegistrationRepository";
import { BaseRegistration } from "../../../entities/BaseRegistration";
import { IReadBaseRegistrationRequestDTO } from "./ReadBaseRegistrationDTO";

export class ReadBaseRegistrationUseCase {
  constructor (
    private BaseRegistrationRepository: IBaseRegistrationRepository,
  ) {}

  async execute(data: IReadBaseRegistrationRequestDTO) {
    let basesRegistration: BaseRegistration[]

    if (data.id) {
      basesRegistration.push(await this.BaseRegistrationRepository.findById(data.id))
    } else if (data.idAuth) {
      basesRegistration.push(await this.BaseRegistrationRepository.findByIdLogin(data.idAuth))
    } else if (data.idCity) {
      basesRegistration = await this.BaseRegistrationRepository.findByIdCidade(data.idCity)
    }

    if (basesRegistration) return basesRegistration

    throw new Error('Não houve resultado nas buscas')
  }
}