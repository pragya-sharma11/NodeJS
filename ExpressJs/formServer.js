const express = require("express")
let formApp=express()
formApp.listen('4444',()=>{
    console.log("server started on localhost:4444")
})

formApp.get('/holi',(req,res)=>{
    let name = "The Anonymous You"
    if(req.query.name){
        name=req.query.name
    }
    res.send("Happy Holi "+name)
})

formApp.get('/form',(req,res)=>{
    res.sendFile(__dirname + '/files/WishingForm')
})