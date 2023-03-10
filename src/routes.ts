import { Router } from "express";
import { createAuthController } from "./useCases/Auth/CreateAuth";
import { modifyAuthController } from "./useCases/Auth/ModifyAuth";
import { readAuthController } from "./useCases/Auth/ReadAuth";
import { createBankCompanyController } from "./useCases/BankCompany/CreateBankCompany";
import { modifyBankCompanyController } from "./useCases/BankCompany/ModifyBankCompany";
import { readBankCompanyController } from "./useCases/BankCompany/ReadBankCompany";

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




routes.put('/bank', (request, response) => {
  return createBankCompanyController.handle(request, response)
})
routes.post('/bank/:id', (request, response) => {
  return modifyBankCompanyController.handle(request, response)
})
routes.get('/bank', (request, response) => {
  return readBankCompanyController.handle(request, response)
})

export { routes }