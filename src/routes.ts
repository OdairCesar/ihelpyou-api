import { Router, response } from "express";
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
import { createBaseRegistrationController } from "./useCases/BaseRegistration/CreateBaseRegistration";
import { modifyBaseRegistrationController } from "./useCases/BaseRegistration/ModifyBaseRegistration";
import { readBaseRegistrationController } from "./useCases/BaseRegistration/ReadBaseResgistration";
import { deleteBankCompanyController } from "./useCases/BankCompany/DeleteBankCompany";
import { readCityController } from "./useCases/City/ReadCity";
import { modifyServiceController } from "./useCases/Service/ModifyService";
import { deleteServiceController } from "./useCases/Service/DeleteService";
import { readServiceController } from "./useCases/Service/ReadService";
import { createServiceController } from "./useCases/Service/CreateService";
import { createCompanyController } from "./useCases/Company/CreateCompany";
import { modifyCompanyController } from "./useCases/Company/ModifyCompany";
import { readCompanyController } from "./useCases/Company/ReadCompany";
import { createCompanyStatusController } from "./useCases/CompanyStatus/CreateCompanyStatus";
import { modifyCompanyStatusController } from "./useCases/CompanyStatus/ModifyCompanyStatus";
import { readCompanyStatusController } from "./useCases/CompanyStatus/ReadCompanyStatus";
import { createDepartmentController } from "./useCases/Department/CreateDepartment";
import { deleteDepartmentController } from "./useCases/Department/DeleteDepartment";
import { modifyDepartmentController } from "./useCases/Department/ModifyDepartment";
import { readDepartmentController } from "./useCases/Department/ReadDepartment";
import { createOrderController } from "./useCases/Order/CreateOrder";
import { modifyOrderController } from "./useCases/Order/ModifyOrder";
import { readOrderController } from "./useCases/Order/ReadOrder";
import { createOrderEvaluationController } from "./useCases/OrderEvaluation/CreateOrderEvaluation";
import { deleteOrderEvaluationController } from "./useCases/OrderEvaluation/DeleteOrderEvaluation";
import { modifyOrderEvaluationController } from "./useCases/OrderEvaluation/ModifyOrderEvaluation";
import { readOrderEvaluationController } from "./useCases/OrderEvaluation/ReadOrderEvaluation";
import { createPlatformBenefitController } from "./useCases/PlatformBenefit/CreatePlatformBenefit";
import { deletePlatformBenefitController } from "./useCases/PlatformBenefit/DeletePlatformBenefit";
import { modifyPlatformBenefitController } from "./useCases/PlatformBenefit/ModifyPlatformBenefit";
import { readPlatformBenefitController } from "./useCases/PlatformBenefit/ReadPlatformBenefit";
import { createPlatformPlanController } from "./useCases/PlatformPlan/CreatePlatformPlan";
import { deletePlatformPlanController } from "./useCases/PlatformPlan/DeletePlatformPlan";
import { modifyPlatformPlanController } from "./useCases/PlatformPlan/ModifyPlatformPlan";
import { readPlatformPlanController } from "./useCases/PlatformPlan/ReadPlatformPlan";
import { createServiceAnalysisController } from "./useCases/ServiceAnalysis/CreateServiceAnalysis";
import { readServiceAnalysisController } from "./useCases/ServiceAnalysis/ReadServiceAnalysis";
import { modifyServiceAnalysisController } from "./useCases/ServiceAnalysis/ModifyServiceAnalysis";

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

routes.delete('/bank', (request, response) =>{
  return deleteBankCompanyController.handle(request, response) 
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




routes.put('/baseRegistration', (request, response) => {
  return createBaseRegistrationController.handle(request, response)
})

routes.post('/baseRegistration/:id', (request, response) => {
  return modifyBaseRegistrationController.handle(request, response)
})

routes.get('/baseRegistration', (request, response) =>{
  return readBaseRegistrationController.handle(request, response)
})




routes.get('/city', (request, response) => {
  return readCityController.handle(request, response) 
})




routes.put('/service', (request, response) => {
  return createServiceController.handle(request, response) 
})

routes.delete('/service', (request, response) => {
  return deleteServiceController.handle(request, response) 
})

routes.post('/service/:id', (request, response) => {
  return modifyServiceController.handle(request, response) 
})

routes.get('/service', (request, response) => {
  return readServiceController.handle(request, response) 
})




routes.put('/company', (request, response) => {
  return createCompanyController.handle(request, response) 
})

routes.post('/company/:id', (request, response) => {
  return modifyCompanyController.handle(request, response) 
})

routes.get('/company', (request, response) => {
  return readCompanyController.handle(request, response) 
})




routes.put('/companyStatus', (request, response) => {
  return createCompanyStatusController.handle(request, response) 
})

routes.post('/companyStatus/:id', (request, response) => {
  return modifyCompanyStatusController.handle(request, response) 
})

routes.get('/companyStatus', (request, response) => {
  return readCompanyStatusController.handle(request, response) 
})




routes.put('/department', (request, response) => {
  return createDepartmentController.handle(request, response) 
})

routes.delete('/department', (request, response) => {
  return deleteDepartmentController.handle(request, response) 
})

routes.post('/department/:id', (request, response) => {
  return modifyDepartmentController.handle(request, response) 
})

routes.get('/department', (request, response) => {
  return readDepartmentController.handle(request, response) 
})




routes.put('/order', (request, response) => {
  return createOrderController.handle(request, response) 
})

routes.post('/order/:id', (request, response) => {
  return modifyOrderController.handle(request, response) 
})

routes.get('/order', (request, response) => {
  return readOrderController.handle(request, response) 
})




routes.put('/orderEvaluation', (request, response) => {
  return createOrderEvaluationController.handle(request, response) 
})

routes.delete('/orderEvaluation', (request, response) => {
  return deleteOrderEvaluationController.handle(request, response) 
})

routes.post('/orderEvaluation/:id', (request, response) => {
  return modifyOrderEvaluationController.handle(request, response) 
})

routes.get('/orderEvaluation', (request, response) => {
  return readOrderEvaluationController.handle(request, response) 
})




routes.put('/platformBenefit', (request, response) => {
  return createPlatformBenefitController.handle(request, response) 
})

routes.delete('/platformBenefit', (request, response) => {
  return deletePlatformBenefitController.handle(request, response) 
})

routes.post('/platformBenefit/:id', (request, response) => {
  return modifyPlatformBenefitController.handle(request, response) 
})

routes.get('/platformBenefit', (request, response) => {
  return readPlatformBenefitController.handle(request, response) 
})




routes.put('/platformPlan', (request, response) => {
  return createPlatformPlanController.handle(request, response) 
})

routes.delete('/platformPlan', (request, response) => {
  return deletePlatformPlanController.handle(request, response) 
})

routes.post('/platformPlan/:id', (request, response) => {
  return modifyPlatformPlanController.handle(request, response) 
})

routes.get('/platformPlan', (request, response) => {
  return readPlatformPlanController.handle(request, response) 
})




routes.put('/serviceAnalysis', (request, response) => {
  return createServiceAnalysisController.handle(request, response) 
})

routes.post('/serviceAnalysis/:id', (request, response) => {
  return modifyServiceAnalysisController.handle(request, response) 
})

routes.get('/serviceAnalysis', (request, response) => {
  return readServiceAnalysisController.handle(request, response) 
})



export { routes }