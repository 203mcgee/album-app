const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000

// Root Route => http://localhost:3000/api

router.get('/api',(req,res)=>{
    //res.send('album api')
    res.json({
        'All Albums': `http://localhost:${PORT}/api/album`,
        'All Artist': `http://localhost:${PORT}/api/artist`,
        'All Bands': `http://localhost:${PORT}/api/band`,
        'All Labels': `http://localhost:${PORT}/api/label`
    })
})

// router.use('/api/album',require('./api/albumRoutes'))
// router.use('/api/artist',require('./api/artistRoutes'))

const endpoints = ['album','artist','band','label']

endpoints.forEach(endpoint =>{
    router.use(`/api/${endpoint}`,require(`./api/${endpoint}Routes`))
})

router.use((req,res,next)=>{
    res.status(404)
    .send('<h1> 404 Error This Page Does Not Exist </h1>')
})

module.exports = router