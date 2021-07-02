const express = require('express')
const app=express()
app.listen(4321,()=>{
    console.log('server is on http://localhost:4321')
})

app.get('/',(req,res)=>{
    res.send('hello!!')
})
app.use('/xyz',express.static(__dirname +'/PublicFolder'))