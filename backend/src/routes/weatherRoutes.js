//Routes of my server
import { GetMongoData } from '../controller/dbController.js'
import { InsertWeatherData } from '../controller/dbController.js'


import {Router} from 'express'

export const Rotas = Router()

Rotas.get('/teste', (req, res)=>{
    res.send("teste")
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