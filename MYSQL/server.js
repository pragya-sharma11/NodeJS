const express = require('express')
const app = express()
const db = require('./db')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine", "hbs")
app.set('views',__dirname+ '/views')
app.listen(4444,()=>{
    console.log("server started on http://localhost:4444")
})
app.get('/', (req,res)=>{
/*    res.render('person',{
        person:[
            {name:'abc', age:22, city:'abcCity'},
            {name:'abc', age:22, city:'abcCity'}
        ]
    })
*/
    db.getAllUsers()
    .then((person)=>{
        res.render('person', {person})
    })
    .catch((err=>{
        res.send(err)
    }))

})

app.get('/add', (req, res)=>{
    res.render('person_add')
})
app.post('/add', (req, res)=>{
    db.addUsers(req.body.name, req.body.age, req.body.city)
    .then(()=>{
        res.redirect('/')
    })
    .catch((err)=>{
        res.send(err)
    })
})