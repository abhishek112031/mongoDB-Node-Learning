const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const userSchema=new Schema({
    name:String,
    email:{type:String,unique:true},
    message:String,
    createdAt:String
});
module.exports= mongoose.model('User', userSchema);