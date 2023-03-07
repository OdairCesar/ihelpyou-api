import { Request, Response } from "express"
import { CreateAuthUseCase } from "./CreateAuthUseCase"

export class CreateAuthController {
  constructor (
    private createAuthUseCase: CreateAuthUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password, type, google, facebook } = request.body

    try{
      await this.createAuthUseCase.execute({
        email,
        password,
        type,
        google,
        facebook
      })

      return response.status(201).send()
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}