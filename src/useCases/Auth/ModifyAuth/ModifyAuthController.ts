import { Request, Response } from "express"
import { ModifyAuthUseCase } from "./ModifyAuthUseCase"

export class ModifyAuthController {
  constructor (
    private modifyAuthUseCase: ModifyAuthUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, google, facebook } = request.body
    const id = request.params.id

    try{
      await this.modifyAuthUseCase.execute({
        id,
        email,
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