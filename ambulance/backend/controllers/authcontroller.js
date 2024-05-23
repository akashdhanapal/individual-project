const Usermodel=require('../modules/Usermodel')
const {v4:uuid4}= require ("uuid")
const bcrypt=require ("bcryptjs")
const nodemailer =require("nodemailer")

exports.submit=async(req,res)=>{
  console.log("User page")
  const{mobilenumber,address}=req.body

  let user=await Usermodel.findOne({mobilenumber})
  if(user){
    return res.status(400).json({message:"mobilenumber already registered"})
  }

  const newuser= new Usermodel({
    mobilenumber,
    address,
  })
  await newuser.save()

  // res.send("post page")

   return res.status(200).json({message:"user registered"})
}

exports.getUsers = async(req,res)=>{
      Usermodel.find()
      .then(response => {return res.status(200).json(response)})
      .catch(err=>console.log(err))
      //res.send("booking")
}

exports.getUsersById = async(req,res)=>{
  Usermodel.findById(req.params.id)
  .then(response=>{return res.status(200).json(response)})
  .catch(err=>console.log(err))
}

exports.updateuser = async(req,res)=>{
  console.log(req.params.id,req.body)
  Usermodel.findByIdAndUpdate(req.params.id,req.body)
  .then(response=>{return res.status(200).json(response)})
  .catch(err=>console.log(err))
  res.send("update page")
}

exports.deleteuser = async(req,res)=>{
  console.log(req.params.id)
  Usermodel.findByIdAndDelete(req.params.id)
  .then(response=>{return res.status(200).json({message:"Deleted successfully"})})
  .catch(err=>console.log(err))
}
