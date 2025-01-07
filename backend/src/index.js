//Base of everything
import {Rotas} from "./routes/weatherRoutes.js"
import express from 'express'
import {GetWeatherData} from "./controller/weatherController.js"
import {weatherService} from './services/weatherService.js'
import { app } from "./server.js"

app.use(express.json())
app.use(Rotas)

app.listen(8080, ()=>{
    console.log("Server running http://localhost:8080")
})