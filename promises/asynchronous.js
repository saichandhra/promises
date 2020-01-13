require('es6-promise');
var promise = new Promise((resolve,reject)=>{
    resolve("PROMISE VALUE")
})
console.log("MAIN PROGRAM")
promise.then(console.log)