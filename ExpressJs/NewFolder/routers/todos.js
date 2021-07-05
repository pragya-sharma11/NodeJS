const express = require("express")
const srv = express()
srv.listen(4567);
srv.use(express.json)
srv.use(express.urlencoded({extended:true}))
srv.get('/hello', (req,res)=>{
    res.send("Hello World!")
})
srv.use('/public', express.static(__dirname + "/public"))