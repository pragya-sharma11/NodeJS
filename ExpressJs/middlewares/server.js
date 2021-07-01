const express = require('express')
const app = express()
app.listen(5454,()=>{
    console.log("server is at port 5454")
})
app.get('/',(req,res)=>{
    res.send("Hello World!!")
})
function m1(req,res,next){
    console.log("middleware 1")
    next()
}
function m2(req,res,next){
    console.log("middleware 1")
    next()
}
function m3(req,res,next){
    console.log("middleware 1")
    next()
}
function m4(req,res,next){
    console.log("middleware 1")
    next()
}
function m5(req,res,next){
    console.log("middleware 1")
    next()
}