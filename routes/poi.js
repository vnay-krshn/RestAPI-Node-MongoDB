const express=require('express')
const router=express.Router()
const poiModel=require('../models/poiModels')
const poiModels = require('../models/poiModels')

// to store the images of most wanted criminals
router.post('/',async(req,res)=>{
    const post=new poiModel({
        FaceImg: req.body.FaceImg
    })
    try{
        const savedPost=await post.save()
        res.json(savedPost)
    }
    catch(err){
        res.json({
            messsage:err
        })
    }
})

// to retrieve all the images of most wanted criminals
router.get('/',async(req,res)=>{
     try{
        const post=await poiModels.find()
        res.json(post)
    }
    catch(err){
        res.json({
            messsage:err
        })
    }
})

module.exports=router


