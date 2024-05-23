const express=require("express")


 const{submit, getUsers, updateuser,deleteuser}=require("../controllers/authcontroller")
 const body_parser=require('body-parser')
 
 const route=express.Router()
 route.use(body_parser.json())
console.log("route psge")
 route.post('/submit',submit)
route.get('/getUsers',getUsers)
route.put('/update/:id',updateuser)
route.delete('/delete/:id',deleteuser)

 module.exports=route