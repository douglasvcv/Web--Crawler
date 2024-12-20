//Continue Here

import {GetWeatherData} from '../controller/weatherController.js'
import { app } from '../server.js'

const router = app.route()

router.get('/', GetWeatherData)

module.exports = router;