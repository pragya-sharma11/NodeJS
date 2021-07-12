const sequilize = require('sequelize')

const db = new sequelize('sampledb1', 'sampleuser1', 'samplepassword',{
    host:'localhost'
    dialect:'mysql'
})
db.authenticate()
.then(()=>console.log("connection worked"))
.catch((err)=>console.log(err))