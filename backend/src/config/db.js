//This file config the connection with Database
const mongoose = require('mongoose')
require('dotenv').config({path: require('path').resolve(__dirname,  '../env')})

const connectDB = async ()=>{
    try {
        await mongoose.connect(`${process.env.URI}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Database Connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {connectDB}