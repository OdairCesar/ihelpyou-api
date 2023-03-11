import { Router } from "express";
import { createAuthController } from "./useCases/Auth/CreateAuth";
import { modifyAuthController } from "./useCases/Auth/ModifyAuth";
import { readAuthController } from "./useCases/Auth/ReadAuth";
import { createBankCompanyController } from "./useCases/BankCompany/CreateBankCompany";
import { modifyBankCompanyController } from "./useCases/BankCompany/ModifyBankCompany";
import { readBankCompanyController } from "./useCases/BankCompany/ReadBankCompany";
import { createBankAnalysisController } from "./useCases/BankAnalysis/CreateBankAnalysis";
import { deleteBankAnalysisController } from "./useCases/BankAnalysis/DeleteBankAnalysis";
import { modifyBankAnalysisController } from "./useCases/BankAnalysis/ModifyBankAnalysis";
import { readBankAnalysisController } from "./useCases/BankAnalysis/ReadBankAnalysis";
import { readInfoAuthController } from "./useCases/Auth/ReadInfoAuth";

const routes = Router()




routes.put('/base', (request, response) => {
  return createAuthController.handle(request, response)
})

routes.post('/base/:id', (request, response) => {
  return modifyAuthController.handle(request, response)
})

routes.get('/base', (request, response) => {
  return readInfoAuthController.handle(request, response)
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




routes.put('/bankAnalysis', (request, response) => {
  return createBankAnalysisController.handle(request, response)
})

routes.delete('/bankAnalysis', (request, response) => {
  return deleteBankAnalysisController.handle(request, response)
})

routes.post('/bankAnalysis/:id', (request, response) => {
  return modifyBankAnalysisController.handle(request, response)
})

routes.get('/bankAnalysis', (request, response) =>{
  return readBankAnalysisController.handle(request, response)
})

export { routes }