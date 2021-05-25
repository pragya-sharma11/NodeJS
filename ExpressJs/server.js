const express = require('express')
const app = express()
app.get('/',(req, res)=>{
    res.send('<h1 style="color:red;">Hello World</h1>')//response
    res.send("Hello I am pragya!!!")  
    //can send plain text or html code.
})
//req,res = query variables.
app.get('/greet', (req,res)=>{
    console.log(req.headers)
    //these headers(key value pairs) basically tell the type of requests accepted
    console.log(req)
    res.send('<h1>Good Morning</h1>')
})
app.get('/holi', (req,res)=>{
    let person='Guest';
    if(req.query.person){
        person=req.query.person
    }
    res.send("Happy Holi", person)
})
app.listen(4444, ()=>{
    console.log('server started on http://localhost:4444') //4444 is port.
    //give port greater than 1024 coz 0 to 1024 are reserved ports.
})