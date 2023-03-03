import { Company } from "../entities/Company"

export interface ICompanyRepository {
  findById(id: string): Promise<Company>
  findByMEI(mei: number): Promise<Company>
  findByCNPJ(cnpj: number): Promise<Company>
  findByCPF(cpf: number): Promise<Array<Company>>
  findByIdBaseRegistration(idBaseRegistration: string): Promise<Array<Company>>
  findByIdStatus(idStatus: string): Promise<Company>
  insert(company: Company): Promise<void>
  update(company: Company): Promise<void>
}