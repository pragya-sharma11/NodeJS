const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.send("Hello world!!");
})

app.listen(4321,()=>{
    console.log('server is on http://localhost:4321')
})

app.use('/xyz',express.static(__dirname +'/public'))
/**
 * here we are mounting public folder on xyz path.
 * if i write localhost:4321/xyz--->nothing will be found coz it a path on which folder is mounted.
 * if public folder has a file named index.html(standard notation) then localhost4321/xyz will directed to index.html file.
 * public folder will have files which are used as UI or acessible to user.
 * this above function has same signature as get().
 * localhost:4321/xyz/file.html-->for user shown fime direction.
 * if any request comes from xyz then return files from public folder.
 * if no match in xyz then 'can not GET' msg .
*/

