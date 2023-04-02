export interface ICreateOrderEvaluationRequestDTO {
  title?: string
  description?: string
  date: Date,
  amountStars: number
  idUser: string
  idOrder: string
  idService: string
}