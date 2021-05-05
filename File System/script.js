const fs = require('fs')
// this is the way to import library in javascript.
 //fs -- file system

 fs.writeFileSync('helloword.txt', "hello World")
 //can also write fs.writeFile('filename', txt)
 const data = fs.readFileSync('helloword.txt')
 
 console.log(data)
 console.log(data.toString())