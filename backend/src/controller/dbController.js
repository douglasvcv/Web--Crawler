import { mongo, mongoose } from "mongoose"
import { connectDB } from "../config/db"

const collectionName = 'weather'

const GetWeatherData = async ()=>{
    try {
        connectDB()
        const collection = mongoose.connection.db.collection(collectionName)
        
    } catch (error) {
        
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