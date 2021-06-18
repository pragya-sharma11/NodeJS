console.log("Hello world")
if(typeof window != 'undefined'){
    console.log("Running in browser")
}
else{
    console.log('running in node js.')
}
const lib=require('./lib')
lib.awesomeFunction("Mr.Bean")