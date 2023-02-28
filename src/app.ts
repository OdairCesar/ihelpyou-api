import express from "express"
import { routerUser } from "./routes/User"

const app = express()

app.use(express.json())
app.use(routerUser)

export { app }