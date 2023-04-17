export interface ICreateServiceAnalysisRequestDTO {
  amountAvgDay?: number
  amountAvgWeek?: number
  amountAvgMonth?: number
  timeMdPerUser?: string
  views?: number
  purchaseCancelled?: number
  date: Date
  idService: string
}