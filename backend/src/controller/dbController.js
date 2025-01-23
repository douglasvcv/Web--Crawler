import dotenv from 'dotenv'
import { MongoClient } from "mongodb"
import { weatherService } from "../services/weatherService.js"
import { findMongoData } from '../services/mongoService.js'


const InsertWeatherData = async (data) => {
    try {
        connectDB()
        const collection = mongoose.connection.db.collection(collectionName)
        const data = weatherService(data)
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


const GetMongoData = async (req, res)=>{
    const location = req.query.location || 'London'
    const uri = process.env.URI
    const client = new MongoClient(uri)
  try {
    client.connect()
    console.log("Connect MongoDB database!")
    const db = client.db("webcrawler")
    const collection = db.collection("weather")
     const findData = findMongoData(collection, {name: location})
     if(findData.length == 0){
     const apiData =   weatherService(location)
     if(apiData){
        InsertWeatherData(apiData)
     }
     }
  } catch (error) {
    
  }
    
      
}



export {GetMongoData}
export {InsertWeatherData}