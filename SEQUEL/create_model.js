const sequelize = require('sequelize')
const DATATYPES = sequelize.DATATYPES

const db = new sequelize('sampledb1', 'sampleuser1', 'samplepassword',{
    host:'localhost'
    dialect:'mysql' 
})

