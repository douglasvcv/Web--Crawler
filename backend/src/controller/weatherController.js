//This file is response for controller the datas of api weatherService.js
const { weatherService } = require("../services/weatherService.js")
const { connectDB } = require('../config/db.js')
const { default: mongoose } = require("mongoose")


const collectionName = 'weather'

const GetWeatherData = async (req, res) => {
    try {
        const location = req.query.location || 'London';
        const weatherData = weatherService(location)
        if (!weatherData) {
            res.status(400).json("Bad Request")
        }
        res.status(200).json(weatherData)
        return weatherData
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch weather data" })
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
module.exports = GetWeatherData