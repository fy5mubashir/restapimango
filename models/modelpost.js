const mongoose=require('mongoose')

const PostSchema = mongoose.Schema({
    title:{
        required:true,
        type:String
    },
    price:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});
// mongoose.Schema({
//     username:String,
//     password:String,
// })
module.exports =mongoose.model('Posts',PostSchema);