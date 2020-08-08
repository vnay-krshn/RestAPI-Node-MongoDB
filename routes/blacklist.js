const express=require('express')
const router=express.Router()
const blackListModel=require('../models/blacklistModel')
const cctvModel=require('../models/cctvModel')

// to blacklist a user  
router.post('/',async (req,res)=>{
    const post= new blackListModel({
        RegNumber:req.body.RegNumber
    })

  try{
        const savedPost= await post.save()
        res.json(savedPost)
    }
    catch(err){  
       res.json({
           message:err
       })
    }
})

module.exports=router