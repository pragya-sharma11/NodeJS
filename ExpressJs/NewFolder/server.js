const express = require("express")
const srvr = express()
srvr.listen(4567)
srvr.get('/hello',(req,res)=>{
    res.send("<h1>hello WOrld!</h1>")
})
srvr.use('/',express.static(__dirname + '/public'))