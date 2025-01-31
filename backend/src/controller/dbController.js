import dotenv from 'dotenv'
import { MongoClient } from "mongodb"
import { weatherService } from "../services/weatherService.js"
import { findMongoData } from '../services/mongoService.js'

const collectionName = 'weather'
const db = 'webcrawler'

const client = new MongoClient(process.env.URI)

const InsertWeatherData = async (nameLocation) => {
    try {
        const database = client.db(db)
        const collection = database.collection(collectionName)
        const data = weatherService(nameLocation)
        if (data) {
            const insertData = collection.insertOne(data)
            return insertData
        } else {
            console.log("Something was wrong")
        }
    } catch (error) {
        console.error("Error: ", error)
    } finally {
        await client.close()
        console.log("Database disconnected")
    }
}


const GetMongoData = async (req, res) => {
    const location = req.query.location || 'brazil'
    try {
        client.connect()
        console.log("Connect MongoDB database!")
        const db = client.db("webcrawler")
        const collection = db.collection("weather")
        const findData = findMongoData(collection, { name: location })
        if (findData.length == 0) {
            const apiData = weatherService(location)
            if (!apiData) {
                console.log('Request name is invalid')
            }
            InsertWeatherData(apiData)
            return apiData
        }
    } catch (error) {
        console.log('Error get name', error)
    }


}



export { GetMongoData }
export { InsertWeatherData }