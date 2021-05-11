const fs = require('fs')
// this is the way to import library in javascript.
 //fs -- file system

 fs.writeFileSync('helloword.txt', "hello World")
 //can also write fs.writeFile('filename', txt)
 const data = fs.readFileSync('helloword.txt')
 
 console.log(data) //buffer will be printed!!
 console.log(data.toString()) // actual data in file will be printed!!

 fs.writeFileSync(__dirname+'/file.txt', "something something!!",function (err){
     if(err) throw err
     console.log("File has been written.")
 })