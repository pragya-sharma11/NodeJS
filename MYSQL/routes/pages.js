const route = require('express').Router()
const db = require('../db')

route.get('/', (req,res)=>{
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

route.get('/add', (req, res)=>{
    res.render('person_add')
})
route.post('/add', (req, res)=>{
    db.addUsers(req.body.name, req.body.age, req.body.city)
    .then(()=>{
        res.redirect('/pages')
    })
    .catch((err)=>{
        res.send(err)
    })
})