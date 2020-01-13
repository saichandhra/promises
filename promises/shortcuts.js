require('es6-promise');
var promise = Promise.resolve("resolved")
var promise = Promise.reject(new Error("rejected"))
promise.catch((error)=>{
    console.log(err.message)
})