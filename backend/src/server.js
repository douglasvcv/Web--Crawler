//Tester of file weatherService.js
const {weatherService} = require('./services/weatherService')

async function test(){
    const data = await weatherService('London')
    console.log(data)
}

test()

