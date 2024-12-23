const mongoose = require('mongoose')
import { connectDB } from '../config/db'

const weatherSchema = mongoose.Schema({
    city:{type:String, required:true},
    temperature:{type:Number, required:true},
    humidity:{type:Number, required:true},
    description:{type:String, required:true},
    timestamp:{type:Date, default:Date.now},
})

const WeatherCreate = mongoose.model('Weather', weatherSchema)

module.exports = WeatherCreate