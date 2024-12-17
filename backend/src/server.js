//Tester of file weatherService.js
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') })
const { weatherService } = require('./services/weatherService')

async function test() {
    const data = await weatherService('london')
    console.log(data)
}

test()

