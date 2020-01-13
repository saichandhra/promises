let p=new Promise((fulfill,reject)=>{
    var a=1+1
    if(a==2)
    {
        fulfill('!')
    }
    else
    {
        reject('ERROR!')
    }
});
  p.then((message))=>{
      console.log("FULFILLED"+fulfill)
  })