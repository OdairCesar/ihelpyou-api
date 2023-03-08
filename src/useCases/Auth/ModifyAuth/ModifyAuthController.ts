import { Request, Response } from "express";
import { ModifyAuthUseCase } from "./ModifyAuthUseCase";
import { IModifyAuthRequestDTO } from "./ModifyAuthDTO";

export class ModifyAuthController {
  constructor(private modifyAuthUseCase: ModifyAuthUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, google, facebook } = request.body;
    const id = request.params.id;

    if (!email) {
      return response.status(400).json({
        message: "Informe o email",
      });
    }

    let dto: IModifyAuthRequestDTO = { id, email };

    if (facebook) {
      dto.facebook = facebook;
    }

    if (google) {
      dto.google = google;
    }

    try {
      await this.modifyAuthUseCase.execute(dto);

      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
