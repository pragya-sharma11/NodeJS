const express = require("express")
let formApp=express()
formApp.listen('4444',()=>{
    console.log("server started on localhost:4444")
})
