require('es6-promise');
var promise = new Promise((resolve,reject)=>{
    resolve("I FIRED")
    reject(new Error("I DO NOT FIRE"))
})
function onRejected(error){
    console.log(error.message)
}
promise.then(console.log,onRejected)