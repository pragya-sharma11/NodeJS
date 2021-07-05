const express = require("express")
const srvr = express()
const todoRoute = require('./routers/todos')
srvr.listen(4444,()=>{
    console.log("http://localhost:4444")
})
srvr.use(express.json())
srvr.use(express.urlencoded({extended:true}))
srvr.get('/hello',(req,res)=>{
    res.send("<h1>hello WOrld!</h1>")
})
srvr.use('/public',express.static(__dirname + '/public'))
srvr.use('/todos',todoRoute)