const sequilize = require('sequelize')

const db = new sequelize('sampledb1', 'sampleuser1', 'samplepassword',{
    host:'localhost'
    dialect:'mysql' //this attribute basically tell which type of database we are using, According to which it relates the queries.
})
db.authenticate()
.then(()=>console.log("connection worked"))
.catch((err)=>console.log(err))

/**
 * sequelize is used to make models to for relational databases.
 */