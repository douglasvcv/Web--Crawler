//Routes of my server
import { GetMongoData } from '../controller/dbController.js'
// import { GetWeatherData } from '../controller/weatherController.js'
import express from 'express'
import { InsertWeatherData } from '../controller/dbController.js'
import {json, Router} from 'express'
import { weatherService } from '../services/weatherService.js'

export const Rotas = Router()

Rotas.use(express.json())

Rotas.get('/', async (req, res)=>{
    const data = await weatherService("london")
    res.status(200).json(data)
})

//Rota para mostrar a requisição de alguma cidade
Rotas.get('/previsao', (req, res)=>{
    if(GetMongoData){
        GetMongoData(req, res)
    }
    res.send("Bad request")
})

//Rota para criar a previsão no banco de dados caso os dados tenha sidos requiridos da api
Rotas.post('/create', (req, res)=>{
    
})

//Rota para excluir previsão do passado 
Rotas.delete('/delete', (req, res)=>{

})