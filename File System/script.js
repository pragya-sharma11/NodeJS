const fs = require('fs')
// this is the way to import library in javascript.
 //fs -- file system

 fs.writeFileSync('helloword.txt', "hello World")
 //can also write fs.writeFile('filename', txt)
 const data = fs.readFileSync('helloword.txt')
 
 console.log(data) //buffer will be printed!!
 console.log(data.toString()) // actual data in file will be printed!!

 fs.writeFile(__dirname+'/file.txt', "something something!!",function (err){
     //__dirname is used to create a txt file in the same directory in which the current script is present or not.
     if(err) throw err
     console.log("File has been written.")
 })
 
 fs.readFile(__dirname+'/file.txt', function (err, data){
    if(err) throw err
    console.log(data)
 })
 //fs.writeFile and fs.readFile both are asynchronous functions so
 //we can't write it like
 //let a = fs.writeFile(...)
 //this way is wrong!!!


