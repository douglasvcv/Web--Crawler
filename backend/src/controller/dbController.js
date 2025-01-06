import { mongoose } from "mongoose"
import { connectDB } from "../config/db"

const dbName = 'webcrawler'
const collectionName = 'weather'

const GetMongoData = async (req, res)=>{
    const location = req.query.location || 'London'

    try {
        connectDB()
        const db = mongoose.db(dbName)
        const collection = db.collection(collectionName)
        const result = collection.find({name: location}).toArray()
        if(!result){
            console.log("Dados não encontrados no banco de dados. Inserindo diretamente da api")
            InsertWeatherData()
        }
        console.log(result)
        return res.status(200).json(result)

    } catch (error) {
        console.error(error)
    }finally{
        mongoose
    }
}

const InsertWeatherData = async () => {
    try {
        connectDB()
        const collection = mongoose.connection.db.collection(collectionName)
        const data = GetWeatherData()
        if (Array.isArray(data)) {
            const result = await collection.insertMany(data)
            console.log("Insert data inside MongoDb")
        } else {
            const result = await collection.insertOne(data)
            console.log("Insert data inside MongoDb")
        }
    } catch (error) {
        console.error("Error: ", error)
    } finally {
        await mongoose.disconnect()
        console.log("Database disconnected")
    }
}