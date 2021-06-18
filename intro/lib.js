function awesomeFunction(name){
    console.log("Hey!! "+name+". This is awesome!!!")
}
//console.log(module.exports) //
module.exports={ //to make use of this function out of script
    awesomeFunction
}
//console.log(module.exports)
setTimeout(()=>{
    module.exports.omg='wow';
},2000)
console.log(module.exports)//awesomeFunction only