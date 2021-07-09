const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database:'mytestdb'
})

function getAllUsers(){
    return new Promise((resolve,reject)=>{
        connection.query(
            'SELECT * FROM persons',
            function(err, rows, cols){
                if(err){
                    reject(err)
                }
                else{
                    resolve(rows)
                }
            }
        )
    })
}

function addUsers(name, age, city){
    return new Promise((resolve, reject)=>{
        connection.query(
            'INSERT INTO persons VALUES(?, ?, ?)',
            [name,age, city],
            function(err,result){
                if(err){
                    reject(err)
                }
                else{
                    resolve(result)
                }
            }
        )
    })
}

exports = module.exports={
    getAllUsers,
    addUsers
}