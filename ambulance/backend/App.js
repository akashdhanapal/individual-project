const express = require("express")
require("dotenv").config()

const connectdb = require('./config/db')
connectdb()

const user = require("./routes/User")

const cors = require("cors")

const app = express()
app.use(cors())

app.use("/user",user)

app.listen(3001,()=>{
  console.log(`server is running ports 3001`)
})