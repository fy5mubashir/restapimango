const express = require('express');
const app= express();
const mongose=require('mongoose');
const bodyparser =require('body-parser')
const postRoute = require('./routes/post')
// const userRoute = require('./routes/')
app.use(bodyparser.json())
app.use('/posts',postRoute)
// app.use('/user',userRoute)
// app.use()
app.get('/',(req,res)=>{
    res.send('Mubashir Started')
})
// app.get('/post',(req,res)=>{
//     res.send('Mubashir Post Started')
// })

mongose.connect('mongodb://localhost:27017',()=>
console.log("Connected Database"))
app.listen(3000);