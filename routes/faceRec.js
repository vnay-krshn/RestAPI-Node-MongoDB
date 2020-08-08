const express=require('express')
const router=express.Router()
const faceRecModel=require('../models/faceRecModel')

// to store the images of criminals
router.post('/',async(req,res)=>{
    const post=new faceRecModel({
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

// to retrieve all the images of criminals
router.get('/',async(req,res)=>{
     try{
        const post=await faceRecModel.find()
        res.json(post)
    }
    catch(err){
        res.json({
            messsage:err
        })
    }
})

module.exports=router