//Base of request api Weather with Axios
const axios = require('axios')
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') })

async function weatherService(location){
    console.log("API Key:", process.env.WEATHER_API_KEY)
    try {
        const apiKey = process.env.WEATHER_API_KEY
        const baseUrl = 'http://api.weatherapi.com/v1/'
        
        const response = await axios.get(`${baseUrl}current.json`, {
            params: {
                key: apiKey,
                q: location
            }
        })

        return response.data
    } catch (error) {
       
        console.error("Error fetching weather data: ", error.message)    
    }
}

module.exports = {
    weatherService,
}