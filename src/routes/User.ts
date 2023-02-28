import { Router } from "express";
// import { createUserController } from "./useCases/CreateUser";

const routerUser = Router()

routerUser.get('/users', (request, response) => {
    return 'Olá'
    // return createUserController.handle(request, response)
})
export { routerUser }