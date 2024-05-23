const moogoose=require('mongoose')
const connectdb=()=>{
    console.log(process.env.DB_URL)
    moogoose.connect(process.env.DB_URL)
    moogoose.connection.on('connected',()=>{
        console.log("mongoose connected successfully")
    })
}

module.exports=connectdb