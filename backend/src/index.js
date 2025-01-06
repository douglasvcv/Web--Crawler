//Base of everything
import {app} from "./server.js"

import {GetWeatherData} from "./controller/weatherController.js"
import {weatherService} from './services/weatherService.js'

app.get('/', async (req, res)=>{
    GetWeatherData(req, res)
})

app.listen(8080, ()=>{
    console.log("Server running http://localhost:8080")
})