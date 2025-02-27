//This file is response for controller the datas of api weatherService.js
import { weatherService } from "../services/weatherService.js"
import { connectDB } from '../config/db.js'
import { mongoose } from "mongoose"

// export const GetWeatherData = async (req, res) => {
//     try {
//         const location = req.query.location || 'London';
//         const weatherData =await weatherService(location)
//         if (!weatherData) {
//            return res.status(400).json("Bad Request")
//         }
//         return res.status(200).json(weatherData)
//     } catch (error) {
//         res.status(500).json({ error: "Failed to fetch weather data" })
//     }
// }




