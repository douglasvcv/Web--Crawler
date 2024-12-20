//Base of everything
import {app} from "./server.js"
import { router } from "./routes/weatherRoutes.js"


app.listen(8080, ()=>{
    console.log("Server running http://localhost:8080")
})