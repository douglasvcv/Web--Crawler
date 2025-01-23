//Routes of my server
import { GetMongoData } from '../controller/dbController.js'
import { GetWeatherData } from '../controller/weatherController.js'

<<<<<<< HEAD
import { InsertWeatherData } from '../controller/dbController.js'
=======

>>>>>>> 601cf9fbd60522243b98b6129c40dea83a341ac3
import {Router} from 'express'

export const Rotas = Router()

<<<<<<< HEAD
Rotas.get('/', (req, res)=>{
    GetWeatherData(req, res)
=======
Rotas.get('/teste', (req, res)=>{
    res.send("teste")
>>>>>>> 601cf9fbd60522243b98b6129c40dea83a341ac3
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