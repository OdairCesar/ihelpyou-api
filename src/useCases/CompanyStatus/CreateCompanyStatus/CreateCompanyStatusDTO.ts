export interface ICreateCompanyStatusRequestDTO {
  restriction?: boolean
  dateAdmission?: Date
  activated?: boolean
  idPlan: string
  idCompany: string
}