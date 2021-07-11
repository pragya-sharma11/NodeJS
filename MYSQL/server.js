const express = require('express')
const app = express()
app.listen(4444,()=>{
    console.log("server started on http://localhost:4444")
})
const path = require('path')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//app.set("view engine", "hbs")
//app.set('views',__dirname+ '/views')

app.use('/', express.static(path.join(__dirname + '/public_static')))
//app.use('/pages', require('./routes/pages').route)
app.use('/api', require('./routes/api').route)