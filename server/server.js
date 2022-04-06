const express = require('express');
const loginRouter = require('./src/controllers/loginRouter');
const birdRouter = require('./src/controllers/birdRouter');
import bodyParser from "body-parser";




let app = express();
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api', loginRouter)
app.use('/api/bird', birdRouter)
app.use('/api/bird',birdRouter)
app.use('/api/bird',birdRouter)



let port = process.env.PORT || 6969;

app.listen(port, ()=>{
    console.log("Nodejs running at the port: " +port)
})