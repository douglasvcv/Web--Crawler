//Routes of my server

import {Router} from 'express'

export const Rotas = Router()

Rotas.get('/', (req, res)=>{
    res.send("Home page!")
})

//Rota para mostrar a requisição de alguma cidade
Rotas.get('/previsao', (req, res)=>{
    res.send('Get weather data')
})

//Rota para criar a previsão no banco de dados caso os dados tenha sidos requiridos da api
Rotas.post('/create', (req, res)=>{
    
})

//Rota para excluir previsão do passado 
Rotas.delete('/delete', (req, res)=>{

})