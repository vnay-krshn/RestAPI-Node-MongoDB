const mongoose=require('mongoose')

const cctvSchema=mongoose.Schema({
    RegNumberImg: {
        type: Number,
        required:true
    },
    RegNumber: {
        type: String,
        required:true
    },
    CameraId: {
        type: String,
        required:true
    },
    Date:{
        type: Date,
        default: Date.now
    }   
})

module.exports=mongoose.model('cctvModel',cctvSchema)