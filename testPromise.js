'use strict';

let testPromise = new Promise((resolve, reject) => {
    console.log('in testPromise');

    // call resolve  
    resolve('Resolve yo');

    // call reject
    // reject('Reject yo');
});

testPromise
    .then((msg)=>{
        console.log("YA! Resolve! The message is:" + msg);
    }, (msg)=>{
        console.log("SO SAD! Reject! The message is:" + msg);
    });