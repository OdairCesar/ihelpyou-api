import { Request, Response } from "express"
import { ReadAuthUseCase } from "./ReadAuthUseCase"

export class ReadAuthController {
  constructor (
    private readAuthUseCase: ReadAuthUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, email, google, facebook } = request.body

    try{
      await this.readAuthUseCase.execute({
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