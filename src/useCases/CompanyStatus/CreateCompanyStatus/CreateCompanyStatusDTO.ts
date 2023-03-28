export interface ICreateCompanyStatusRequestDTO {
  paid?: boolean
  restriction?: boolean
  dateAdmission?: Date
  activated?: boolean
  idPlan?: string
}