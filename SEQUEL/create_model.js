const sequelize = require('sequelize')
const DATATYPES = sequelize.DATATYPES //defines the datatypes 

const db = new sequelize('sampledb1', 'sampleuser1', 'samplepassword',{
    host:'localhost'
    dialect:'mysql' 
})

const student = db.define('Student',{ //create a table in db named Student and inside this object in next param, we have given column names and thier properties. 
    name:{
        type:DATATYPES.STRING(15),
        allowNull:false    
    },
    age:{
        type:DATATYPES.INTEGER,
        allowNull:true,
        default:0
    }
})
