import "reflect-metadata"
import express = require("express")
import { json } from "body-parser"
import { routerUser } from "./routes/User"

const app = express()

app.use(json())
app.use(routerUser)

export { app }