import { Request, Response } from "express";
import { ReadAuthUseCase } from "./ReadAuthUseCase";
import { IReadAuthRequestDTO } from "./ReadAuthDTO";

export class ReadAuthController {
  constructor(private readAuthUseCase: ReadAuthUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, email, google, facebook } = request.body;

    let dto: IReadAuthRequestDTO = {};

    if (id) {
      dto.id = id;
    }
    if (email) {
      dto.email = email;
    }
    if (google) {
      dto.google = google;
    }
    if (facebook) {
      dto.facebook = facebook;
    }

    try {
      const auth = await this.readAuthUseCase.execute(dto);

      return response.status(201).json(auth);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
