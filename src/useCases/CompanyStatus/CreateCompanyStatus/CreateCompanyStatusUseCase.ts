import { CompanyStatus } from "../../../entities/CompanyStatus";
import { ICompanyStatusRepository } from "../../../repositories/ICompanyStatusRepository";
import { ICreateCompanyStatusRequestDTO } from "./CreateCompanyStatusDTO";

export class CreateCompanyStatusUseCase {

  constructor(
    private companyStatusRepository: ICompanyStatusRepository
  ) {}

  async execute(data: ICreateCompanyStatusRequestDTO) {
    const currentDate = new Date();

    const companyStatus = new CompanyStatus({
      dateAdmission: currentDate,
      activated: true,
      restriction: false,
    });

    if (data.dateAdmission) companyStatus.dateAdmission = data.dateAdmission;
    if (data.activated) companyStatus.activated = data.activated;
    if (data.restriction) companyStatus.restriction = data.restriction;

    if (data.idPlan) {
      companyStatus.idPlan = data.idPlan;
      companyStatus.paid = true;

      if (companyStatus.dateAdmission.getTime() > currentDate.getTime()) {
        const differenceDate =
          companyStatus.dateAdmission.getTime() - currentDate.getTime();

        if (differenceDate > 267.84) {
          ///--> Aqui precisamos adicionar metodo para efetuar o pagamento
          companyStatus.paid = false;
        }
      }
    }

    await this.companyStatusRepository.insert(companyStatus);

    return companyStatus.id;
  }
}
