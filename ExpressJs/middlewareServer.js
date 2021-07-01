const express = require('express')
const app = express()
app.get('/hello',(req,res)=>{
    res.send("Hello world!!");
})

app.listen(4321,()=>{
    console.log('server is on http://localhost:4321')
})

app.use('/xyz',express.static(__dirname +'/public'))