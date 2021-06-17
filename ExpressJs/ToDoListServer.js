const express = require('express')
const app = express()
app.listen(5555,()=>{
    console.log("Server is running on port 5555.")
})

app.get('/',(req,res)=>{
    res.send(`
    <html>
    <body>
    <form>
    <input name='task'>
    <button type='submit'>Add</button>
    </form>
    </body> 
    </html>
    `)
})

