const express = require("express")
const srvr = express()
const todoRoute = require('./routers/todos')
srvr.listen(4567)
srv.use(express.json)
srv.use(express.urlencoded({extended:true}))
srvr.get('/hello',(req,res)=>{
    res.send("<h1>hello WOrld!</h1>")
})
srvr.use('/',express.static(__dirname + '/public'))
srv.use('/todos',todoRoute)