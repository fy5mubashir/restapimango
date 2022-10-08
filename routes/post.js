const express=require('express');

const router =express.Router();
const PostModel = require('../models/modelpost') ;

router.get('/',(req,res)=>{
    res.send('Post Started in Node');
})

router.get('/specific',(req,res)=>{
    res.send('Specific Post Started in Node');
})
router.post('/',(req,res)=>{
    const post = new PostModel({
        title:req.body.title,
        price:req.body.price
    })
    post.save()
      .then(data=>{
        res.json(data);
      })
      .catch(err=>{{
        res.json({message:err});
      }})
 console.log(req.body);
})

module.exports=router;