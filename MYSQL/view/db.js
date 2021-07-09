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