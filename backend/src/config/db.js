//This file config the connection with Database
import {MongoClient} from 'mongodb'
import dotenv from 'dotenv'

async function connectDB(){
    const uri = process.env.URI
    const mongo = new MongoClient(uri)
    try {
        mongo.connect()
        console.log("MongoDB Connected!")
    } catch (error) {
        console.error(error)
    }finally{
        mongo.close
    }
}

export {connectDB}