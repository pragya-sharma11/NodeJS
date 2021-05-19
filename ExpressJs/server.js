const express = require('express')
const app = express()
app.get('/',(req, res)=>{
    res.send('<h1 style="color:red;">Hello World</h1>')//response
    
})
app.listen(4444, ()=>{
    console.log('server started on http://localhost:4444') //4444 is port.
    //give port greater than 1024 coz 0 to 1024 are reserved ports.
})