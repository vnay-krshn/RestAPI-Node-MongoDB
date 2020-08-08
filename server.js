// developed by vinay

const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const bodyParser=require('body-parser')
var app=express()
require('dotenv/config') 

//middlewares
app.use(cors())
app.use(bodyParser.json())
app.use(express.static('websites'))
app.use(express.json())

//importing routes
const cctvRoutes=require('./routes/cctv')
app.use('/cctv',cctvRoutes)
const blackListRoutes=require('./routes/blacklist')
app.use('/blacklist',blackListRoutes)
const poiRoutes=require('./routes/poi')
app.use('/poi',poiRoutes)
const faceRecRoutes=require('./routes/faceRec')
app.use('/faceRec',faceRecRoutes) 


mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true } ,()=>{
    console.log("connected to database successfully") 
})

app.listen(3000) 