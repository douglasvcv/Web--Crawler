//Base of request api Weather with Axios
import axios from 'axios'
import dotenv from 'dotenv';
dotenv.config()

export async function weatherService(location){
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

