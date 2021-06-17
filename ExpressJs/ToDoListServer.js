const express = require('express')
const app = express()
app.listen(5555,()=>{
    console.log("Server is running on port 5555.")
})
let tasks = [ ' sample task \n ']
app.use(express.urlencoded({extended:true}))//for adding the things in body.
app.get('/',(req,res)=>{
    let tasklist = tasks.map(t=>`<li>${t}</li>`).join('\n')
    res.send(`
    <html>
    <body>
    <form action='/' method='POST'>
    <input name='newtask'>
    <button type='submit'>Add</button>
    </form>
    <ul>
        ${tasklist}
    </ul>
    </body> 
    </html>
    `)
})

app.post('/',(req,res)=>{
    tasks.push(req.body.newtask)
    res.redirect('/') //send the new request back to this page'/'.
})

