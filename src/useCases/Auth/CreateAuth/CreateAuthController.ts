import { Request, Response } from "express"
import { CreateAuthUseCase } from "./CreateAuthUseCase"

export class CreateAuthController {
  constructor (
    private createAuthUseCase: CreateAuthUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password, confirmPassword, type } = request.body

    if (!email) 
      return response.status(400).json({ 
        message: 'Informe o email' 
      })

    if (!password) 
      return response.status(400).json({ 
        message: 'Informe a senha' 
      })

    if (!confirmPassword) 
      return response.status(400).json({ 
        message: 'Informe a senha de confirmação' })
    
    if (!type) 
      return response.status(400).json({ 
        message: 'Informe o tipo de conta' 
      })

    try{
      await this.createAuthUseCase.execute({
        email,
        password,
        confirmPassword,
        type
      })

      return response.status(201).send()
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}