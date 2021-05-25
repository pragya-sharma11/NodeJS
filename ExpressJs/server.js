const express = require('express')
const app = express()
app.get('/',(req, res)=>{
    res.send('<h1 style="color:red;">Hello World</h1>')//response
    res.send("Hello I am pragya!!!")  
    //can send plain text or html code.
})
app.get('/greet', (req,res)=>{
    console.log(req.headers)
    //these headers basically tell the type of requests accepted
    res.send('<h1>Good Morning</h1>')
})
app.listen(4444, ()=>{
    console.log('server started on http://localhost:4444') //4444 is port.
    //give port greater than 1024 coz 0 to 1024 are reserved ports.
})