const express = require('express')
const app = express()
app.listen(5555,()=>{
    console.log("Server is running on port 5555.")
})

app.get('/',(req,res)=>{
    res.send(`
    <html>
    <body>
    <form action='/' method='POST'>
    <input name='newtask'>
    <button type='submit'>Add</button>
    </form>
    <ul>
        <li>Sample Task</li>
    </ul>
    </body> 
    </html>
    `)
})

