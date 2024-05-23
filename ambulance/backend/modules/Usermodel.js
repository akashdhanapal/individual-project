const mongoose=require('mongoose')

const userschema=new mongoose.Schema({
  mobilenumber:{
    type:Number,
    required:true
  },
  address:{
    type:String,
    required:true,
    unique:true
  }
})
const Usermodel=mongoose.model("user",userschema)
module.exports=Usermodel