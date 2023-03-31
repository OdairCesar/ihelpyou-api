export interface IModifyOrderRequestDTO {
  id: string
  sttService?: 'Cancelado' | 'Concluido' | 'Em andamento' | 'Confirmado'
  sttPayment?: 'Cancelado' | 'Confirmado' | 'Aguardado'
  idBankCompany?: string
  idUserCard?: string
}