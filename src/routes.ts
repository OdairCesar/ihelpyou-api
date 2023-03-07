import { Router } from "express";
import { createAuthController } from "./useCases/Auth/CreateAuth";
import { modifyAuthController } from "./useCases/Auth/ModifyAuth";
import { readAuthController } from "./useCases/Auth/ReadAuth";

const routes = Router()

routes.put('/auth', (request, response) => {
  return createAuthController.handle(request, response)
})

routes.post('/auth/:id', (request, response) => {
  return modifyAuthController.handle(request, response)
})

routes.get('/auth', (request, response) => {
  return readAuthController.handle(request, response)
})

export { routes }