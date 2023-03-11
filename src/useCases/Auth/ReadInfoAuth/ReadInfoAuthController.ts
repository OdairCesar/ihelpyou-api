import { Request, Response } from "express";
import { ReadInfoAuthUseCase } from "./ReadInfoAuthUseCase";
import { IReadInfoAuthRequestDTO } from "./ReadInfoAuthDTO";

export class ReadInfoAuthController {
  constructor(private readInfoAuthUseCase: ReadInfoAuthUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, email, google, facebook } = request.body;

    let dto: IReadInfoAuthRequestDTO = {};

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
      const auth = await this.readInfoAuthUseCase.execute(dto);

      return response.status(201).json(auth);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
