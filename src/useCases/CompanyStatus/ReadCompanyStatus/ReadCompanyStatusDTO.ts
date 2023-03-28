export interface IReadCompanyStatusRequestDTO {
  id?: string
  paid?: boolean
  restriction?: boolean
  dateAdmission?: Date
  activated?: boolean
  idPlan?: string
}