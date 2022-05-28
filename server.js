const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cors())
const routes = require('./Router/routes')
app.use('/api/v2',routes)
app.listen(2000, ()=>{
    console.log('listening to the port 2000')
})