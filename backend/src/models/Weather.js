import { connectDB } from '../config/db.js'



async function InsertWeatherData() {
    try {
        
    } catch (error) {
        
    }
}
async function Db(){
    try {
     await connectDB()
        
    } catch (error) {
        console.error(`Erro: ${error}`)
    }
}
Db()

