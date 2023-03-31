export interface IReadOrderRequestDTO {
  id?: string
  dataStart?: Date
  dataFinish?: Date
  sttService?: 'Cancelado' | 'Concluido' | 'Em andamento' | 'Confirmado' | 'Esperando Confirmação'
  sttPayment?: 'Cancelado' | 'Confirmado' | 'Aguardado'
  idBankCompany?: string
  idUserCard?: string
  idUser?: string
  idService?: string
}