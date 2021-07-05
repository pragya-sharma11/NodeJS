const express = require('express')
const app=express()
app.listen(4321,()=>{
    console.log('server is on http://localhost:4321')
})

/*app.get('/',(req,res)=>{
    res.send('hello!!')
})*/
app.use('/',express.static(__dirname +'/PublicFolder'))
function decodeQueryBase64(req,res,next){
    for(let q in req.query){
        let  data =(req.query[q])
        data = new Buffer(data, 'base64').toString('acsii')
        req.query[q]=data //here i have changed data nd its remained changed for rest of the middlewares.
    }
    next()
}
/**
 * if we change any data in one middleware then 
 * data for next middleware will be changed.
 */
app.get('/eval',decodeQueryBase64,(req,res)=>{
    let dataeval = req.query
    dataeval = eval(dataeval)
    res.send(dataeval)
})

