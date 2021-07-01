const express = require('express')
const app = express()
app.listen(5454,()=>{
    console.log("server is at port 5454")
})
app.get('/',(req,res)=>{
    res.send("Hello BRO!!")
})