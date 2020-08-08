const express=require('express')
const router=express.Router()
const cctvModel=require('../models/cctvModel')
const { model } = require('mongoose')

router.post('/',async (req,res)=>{
    const post=new cctvModel({
        RegNumberImg: req.body.RegNumberImg,
        RegNumber: req.body.RegNumber,
        CameraId:req.body.CameraId,
        Date:req.body.Date
    })
    try{
        const savedPost=await post.save()
        res.json(savedPost)
    }
    catch(err){
        res.json({
            message:err
        })
    }

})

// to search for a particular vehicle 
router.get('/',async (req,res)=>{

  try{
        const post= await cctvModel.find({RegNumberImg:10101011})
        res.json(post)
    }
    catch(err){
        res.json({
            message:err
        })
    }
})

module.exports=router