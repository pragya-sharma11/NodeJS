const express = require('express')
const app = express()
app.listen(5454,()=>{
    console.log("server is at port 5454")
})

function m1(req,res,next){
    console.log("middleware 1")
    next()
}
function m2(req,res,next){
    next()
    console.log("middleware 2")
    
}
function m3(req,res,next){
    next()
    console.log("middleware 3")
    
}
function m4(req,res,next){
    console.log("middleware 4")
    next()
}
function m5(req,res,next){
    console.log("middleware 5")
    next()
}
app.get('/',m1,m2,m3,m4,m5,(req,res)=>{
    console.log('pre-send')
    res.send("Hello World!!")
    console.log('post-send')
})
//get can accept so many parameters but first will always be path
/**
 * if something is written after next() in middleware
 * then first the call to next middle ware is done, if any middleware is next in parameters
 * then the statements which are written after next will execute.
 * its like recursion stack. 
 * we use middlewares for processing data even after sending respose.
 * this can be used to save logs, save progress of a student in any course.
 * like video is marked as completed when we watch it completely.
 * or we can used analytics on data using middlewares.
 */