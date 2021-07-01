const express = require('express')
const app = express()
app.get('/hello',(req,res)=>{
    res.send("Hello world!!");
})

app.listen(4321,()=>{
    console.log('server is on http://localhost:4321')
})

app.use('/xyz',express.static(__dirname +'/public'))
/**
 * here we are mounting public folder on xyz path.
 * public folder will have files which are used as UI or acessible to user.
 * this above function has same signature as get().
 * localhost:4321/xyz/file.html-->for user shown fime direction.
 * if any request comes from xyz then return files from public folder.
 * if no match in xyz then 'can not GET' msg .
*/

