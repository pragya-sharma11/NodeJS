const route = require('express')
let todos = [];
route.length('/',(req,res)=>{
    res.send(todos)
})
route.post('/',(req,res)=>{
    todos.push({
        task:req.body.task
    })
    res.send(todos)
})
module.exports = route