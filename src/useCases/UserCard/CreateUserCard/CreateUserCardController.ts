import { Request, Response } from "express";
import { ICreateUserCardRequestDTO } from "./CreateUserCardDTO";
import { CreateUserCardUseCase } from "./CreateUserCardUseCase";

export class CreateUserCardController {

  constructor(
    private createUserCardUseCase: CreateUserCardUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { numberCard, name, validity, securityCode, idUser } = request.body

    if (!numberCard || !name || !validity || !securityCode || idUser) {
      response.status(400).json({
        message: "Está faltando parametros"
      })
    }

    let dto: ICreateUserCardRequestDTO = { 
      numberCard, 
      name, 
      validity, 
      securityCode, 
      idUser 
    }

    try{
      this.createUserCardUseCase.execute(dto)

      response.status(201).send()
    } catch (err) {
      response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}