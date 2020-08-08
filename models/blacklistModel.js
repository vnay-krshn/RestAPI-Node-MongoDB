const mongoose=require('mongoose')

blackListSchema=mongoose.Schema({
    RegNumber:{
        type: String,
        required:true
    }
})

module.exports=mongoose.model('blacklistModel',blackListSchema)