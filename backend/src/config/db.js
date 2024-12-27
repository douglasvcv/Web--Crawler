//This file config the connection with Database
const mongoose = require('mongoose')
require('dotenv').config()

const uri = process.env.URI 


const connectDB = async ()=>{
    try {
        await mongoose.connect(`${process.env.URI}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Database Connected")

       
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
    console.log(uri)
}
connectDB()
module.exports = {connectDB}