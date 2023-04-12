import { CompanyStatus } from "../../../entities/CompanyStatus";
import { ICompanyRepository } from "../../../repositories/ICompanyRepository";
import { ICompanyStatusRepository } from "../../../repositories/ICompanyStatusRepository";
import { IPlatformPlanRepository } from "../../../repositories/IPlatformPlanRepository";
import { ICreateCompanyStatusRequestDTO } from "./CreateCompanyStatusDTO";

export class CreateCompanyStatusUseCase {

  constructor(
    private companyStatusRepository: ICompanyStatusRepository,
    private platformPlanRepository: IPlatformPlanRepository,
    private companyRepository: ICompanyRepository
  ) {}

  async execute(data: ICreateCompanyStatusRequestDTO) {
    const currentDate = new Date();

    const plan = await this.platformPlanRepository.findById(data.idPlan)
    const company = await this.companyRepository.findById(data.idCompany)

    if (!company) throw new Error('Empresa informata é invalida');
    if (!plan) throw new Error('O plano informato é invalido');

    const newCompanyStatus = new CompanyStatus({
      paid: true,
      dateAdmission: currentDate,
      restriction: false,
      activated: true,
      idPlan: data.idPlan,
    });


    if (typeof data.dateAdmission) newCompanyStatus.dateAdmission = data.dateAdmission;
    if (typeof data.activated === "boolean") newCompanyStatus.activated = data.activated;
    if (typeof data.restriction === "boolean") newCompanyStatus.restriction = data.restriction;


    if (newCompanyStatus.dateAdmission.getTime() > currentDate.getTime()) {
      const differenceDate =
        newCompanyStatus.dateAdmission.getTime() - currentDate.getTime();

      if (differenceDate > 267.84) {
        ///--> Aqui precisamos adicionar metodo para efetuar o pagamento
        newCompanyStatus.paid = false;
      }
    }

    try {
      await this.companyStatusRepository.insert(newCompanyStatus);
    } catch (err) {
      throw new Error(err)
    }

    company.idStatus = newCompanyStatus.id

    try {
      await this.companyRepository.update(company)
    } catch (err) {
      throw new Error(err)
    }
  }
}
