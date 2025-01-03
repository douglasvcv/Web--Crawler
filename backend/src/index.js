//Base of everything
import {app} from "./server.js"

import {GetWeatherData} from "./controller/weatherController.js"

app.get('/', (req, res)=>{
    GetWeatherData()
})

app.listen(8080, ()=>{
    console.log("Server running http://localhost:8080")
})