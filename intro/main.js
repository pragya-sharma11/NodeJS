console.log("Hello world")
if(typeof window != 'undefined'){
    console.log("Running in browser")
}
else{
    console.log('running in node js.')
}
const lib=require('./lib')
console.log(lib)  //only awesomeFunction will be in the lib object
lib.awesomeFunction("Mr.Bean")

setTimeout(()=>{
    const lib_new = require('./lib')
    console.log(lib_new) // now the lib will be update and has omg object too.
},2000)
console.log(lib)
