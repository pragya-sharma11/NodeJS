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
        allowNull:false,
        default:-1
    }
})

db.sync({alter:true}) //alter:true means we have already created table but if we make changes in schema code and again run the code then the same changes will reflect in the schema.
.then(()=>console.log("Synchronised")) //we can also do force:true which will drop the existing table and made a new table.
.catch((err)=>console.log("err"))
