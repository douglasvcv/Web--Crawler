//This file is response for controller the datas of api weatherService.js
const {weatherService} = require("../services/weatherService.js")

const GetWeatherData = async (req, res) =>{
    try {
        const location = req.query.location || 'London';
        const weatherData = weatherService(location)
        res.status(200).json(weatherData)
    } catch (error) {
        res.status(500).json({error: "Failed to fetch weather data"})
    }
}