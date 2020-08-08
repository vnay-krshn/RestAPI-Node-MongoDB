const mongoose=require('mongoose')

const poiSchema=mongoose.Schema({
    FaceImg: Number
})

module.exports=mongoose.model('poiModel',poiSchema)