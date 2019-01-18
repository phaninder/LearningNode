console.log('starting');

setTimeout(()=>{
    console.log("Inside callback");
},2000);

setTimeout(()=>{
    console.log("Inside 2  callback");
},1000);

console.log('finishing');