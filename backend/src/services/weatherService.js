//Base of request api Weather with Axios
import axios from 'axios'
import dotenv from 'dotenv/config.js';


export async function weatherService(location){
   
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

weatherService('london')