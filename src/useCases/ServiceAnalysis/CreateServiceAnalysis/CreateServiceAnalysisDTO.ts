export interface ICreateServiceAnalysisRequestDTO {
  id: string
  amountAvgDay: number
  amountAvgWeek: number
  amountAvgMonth: number
  timeMdPerUser: string
  views: number
  purchaseCancelled: number
  idService: string
}