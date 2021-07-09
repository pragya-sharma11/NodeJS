const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine", "hbs")
app.listen(4444,()=>{
    console.log("server started on http://localhost:4444")
})