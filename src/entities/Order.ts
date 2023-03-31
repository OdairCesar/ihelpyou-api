import { uuid } from "uuidv4";

export class Order {

  public readonly id: any
  public dataStart: Date
  public dataFinish?: Date
  public sttService: 'Cancelado' | 'Concluido' | 'Em andamento' | 'Confirmado' | 'Esperando Confirmação'
  public sttPayment: 'Cancelado' | 'Confirmado' | 'Aguardado'
  public idBankCompany: any
  public idUserCard: any
  public idUser: any
  public idService: any

  constructor(props: Omit<Order, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}