'use strict';

let testPromise = new Promise((resolve, reject) => {
    console.log('in testPromise');

    // call resolve  
    // resolve('Resolve yo');

    // call reject
    reject('Reject yo');
});

testPromise
    .then((msg) => {
        console.log("YA! Resolve! The message is:" + msg);
    }).catch((msg) => { 
        console.log("WANNA CRY! Catch Error! The message is:" + msg);
    });