const express = require("express")
let formApp=express()
formApp.listen('4444',()=>{
    console.log("server started on localhost:4444")
})
formApp.use(express.urlencoded({extended : true}))
//this above function runs before the get , post push etc methods.
//it parses the file, data which comes to server as urlencoded format.
//if the above method is not used then it will not encode the name value in post and give error.
formApp.get('/holi',(req,res)=>{
    let name = "The Anonymous You"
    if(req.query.name){
        name=req.query.name
    }
    res.send("Happy Holi "+name)
})
formApp.post('/holi',(req,res)=>{
    let name = "The Anonymous You"
    if(req.body.name){
        name=req.body.name
    }
    res.send("Happy Holi "+name)
})
/**
 * by post method, we can't give any name .
 * As u see it does not accept the value in query of request.
 * It post the value in body of request.
 */
formApp.get('/form',(req,res)=>{
    res.sendFile(__dirname + '/files/WishingForm.html')
})

formApp.get('/:city/welcome',(req,res)=>{
    res.send('welcome to '+req.params.city + " !!")
})
//:city - here it means, city is a variable path nsme . Anything written in urlpath inplace of city is considered.
formApp.get('/:city/:greeting',(req,res)=>{
    res.send(req.params.greeting +" to "+req.params.city)
})
//it we make two siilar path with diffrent name for above format , the first one will be given the preference.
formApp.get('/wishes/morning', (req,res)=>{
    res.send("good morning")
})

formApp.get('/holi/getColor',(req,res)=>{
    let color='red'
    if(req.query.color){
        color=req.query.color
    }
    res.send(" Enjoy the color "+color+" of holi !!!")
})