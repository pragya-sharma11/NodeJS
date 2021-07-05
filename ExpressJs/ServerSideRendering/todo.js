const route =require('express').Router()
let todos = [
    {task : "First task"},
    {task : 'Second task'}
]
route.get('/',function(req,res){
    res.render('todos',{todos})
    //second argument is object.:-todos is an array object.
    //we willl not write todos.hbs coz we have already told server that 
    //we are using view engine of hbs. 
    //when we put todos it will go to todos.hbs and is todos object is an array it wll insert the elements in ul.
})
route.post('/',(req,res)=>{
    todos.push({
        task: req.body.newtodo
    })
    res.redirect('/todos')//redirect to given path
})
module.exports = route