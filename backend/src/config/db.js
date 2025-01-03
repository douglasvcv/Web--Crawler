//This file config the connection with Database
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const uri = process.env.URI 


export const connectDB = async ()=>{
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

