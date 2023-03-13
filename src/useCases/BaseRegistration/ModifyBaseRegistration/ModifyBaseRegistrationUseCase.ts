import { IBaseRegistrationRepository } from "../../../repositories/IBaseRegistrationRepository";
import { IModifyBaseRegistrationRequestDTO } from "./ModifyBaseRegistrationDTO"

export class ModifyBaseRegistrationUseCase {
  constructor(
    private baseRegistrationRepository: IBaseRegistrationRepository
  ) { }

  async execute(data: IModifyBaseRegistrationRequestDTO) {
    const line = await this.baseRegistrationRepository.findById(data.id)

    if (!line) {
      throw Error('O usuario informato não existe')
    }

    if (data.fone) line.fone = data.fone;
    if (data.name) line.name = data.name;
    if (data.image) line.image = data.image;
    if (data.address) line.address = data.address;
    if (data.addressNumber) line.addressNumber = data.addressNumber;
    if (data.neighborhood) line.neighborhood = data.neighborhood;
    if (data.active) line.active = data.active;
    if (data.idCity) line.idCity = data.idCity

    await this.baseRegistrationRepository.update(line)
  }
}