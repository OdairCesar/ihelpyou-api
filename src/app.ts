import "reflect-metadata"
import express = require("express")
import { json } from "body-parser"
import { routes } from "./routes"
import cors = require('cors')

const app = express()

app.use(cors()) 
app.use(json())
app.use(routes)

export { app }