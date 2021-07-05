const express = require('express')
const srv = express()
const todoRoute = require('./todo') 
srv.listen(4444)
srv.use(express.json())
srv.use(express.urlencoded({extended:true}))
srv.set('view engine','hbs')
srv.set('views',__dirname+ '/views') //second parameter is name of our folder in which view files are located.

srv.use('/todos',todoRoute)
