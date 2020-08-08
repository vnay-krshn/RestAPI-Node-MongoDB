const mongoose=require('mongoose')

const faceRecSchema=mongoose.Schema({
    FaceImg: Number
})

module.exports=mongoose.model('faceRecModel',faceRecSchema)