const route = require('express').route
//This route is on "/api/ path"
const db = require("../db")
route.get('/',(req,res)=>{
    //send all persons as array here
    db.getAllUsers()
    .then((person)=> res.send(person))
    .catch((err)=>res.send(err))
})

route.post('/',(req,res)=>{
    db.addUsers(req.body.name,req.body.age,req.body.city)
    .then(()=>res.redirect("/api/"))
    .catch((err)=>res.send(err))
})
exports = module.exports={
    route
}