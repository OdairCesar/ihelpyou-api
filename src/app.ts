import "reflect-metadata"
import express = require("express")
import { json } from "body-parser"
import { routes } from "./routes"

const app = express()

app.use(json())
app.use(routes)

export { app }