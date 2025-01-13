import dotenv from 'dotenv'
import { MongoClient } from "mongodb"
import { weatherService } from "../services/weatherService.js"
import { findMongoData } from '../services/mongoService.js'

const dbName = 'webcrawler'
const collectionName = 'weather'

const GetMongoData = async (req, res)=>{
    const location = req.query.location || 'London'
    const uri = process.env.URI
    const client = new MongoClient(uri)
  try {
    client.connect()
    console.log("Connect MongoDB database!")
    const db = client.db("webcrawler")
    const collection = db.collection("weather")
     const findData = findMongoData()
     if(!findData){
        console.log("Requisisão mal-sucedida!")
     }
  } catch (error) {
    console.error(error)
  }finally{
    client.close()
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

export {GetMongoData}
export {InsertWeatherData}