const express = require('express')
const app=express()
app.listen(4321,()=>{
    console.log('server is on http://localhost:4321')
})

/*app.get('/',(req,res)=>{
    res.send('hello!!')
})*/
app.use('/',express.static(__dirname +'/PublicFolder'))

app.get('/eval',(req,res)=>{
    res.send("=======eval result========")
})