
//**** DEMO ONE */


// console.log('Start');
// const objPromise =  new Promise (function (resolve, reject){

const { copyFileSync } = require("fs");

// console.log ('Inside Promise...1');

// reject('Whoops!');
// resolve('Hello');

// console.log('Inside Pomisse...2')

//    // Once the new promise object is created (new Promise), the executor function is excecuted.
//   // resolve() and reject () are also functions.


// });

//    //Passing values to the resolve () function

// objPromise.then(data => console.log (`resolve ...${data}`))
// .catch(error => console.log(`error: ${error}`));

//     //Passing values to reject (),

// console.log('End');




// DEMO TWO

// console.log('start');
// const promiseObj = new Promise (function (resolve, reject) { 

// resolve(1);

// });
// console.log(promiseObj); //This part is not Asynchronous

// console.log ('end');



// DEMO THREE

// console.log ('Start');
// const  promiseObj = new Promise (function(resolve, reject ){

//     setTimeout(()=> resolve(1), 3000);
// });

// promiseObj.then(console.log) // This line can be written as;


// // promiseObj.then(data => console.log(data));

// console.log('End')

//DEMO FOUR

// console.log ('Start');
// const  promiseObj = new Promise (function(resolve, reject ){

//     setTimeout(()=> resolve(1), 3000);
// });

// console.log(promiseObj);// This will print the Promise object: Pending

// // promiseObj.then(data => console.log(data));

// console.log('End')



//DEMO FIVE

// console.log('start');

// new Promise (( reject, resolve ) => {

//     console.log('Promise Start');

//     const random =  Math.random ();

//     if(random > 0.5 ){
//         resolve('Success');
//     } else {
//         reject('Whoops')
//     }
//     console.log('Promise End');
// }).then (data => console.log( 'Inside Resolve:' + data))
// .catch(error => console.log('Inside Reject: ' + error))
// .finally(() => console.log('Clear Resources')); // All the call-backs are asynchronous


// console.log('end')


// DEMO SIX

// console.log('Start')

// const obj = new Promise (resolve => {

//     resolve(1);
// }).then(data => console.log(data * 2));

// console.log(obj);

// console.log('End');



//DEMO SEVEN

// console.log ('Start - 7 -1');

// function foo() {
    
//     return 'Hello';
// }

// const result = foo();

// console.log(result);

// console.log('end')



// console.log ('Start-7-2');

// async function foo() {

//     console.log('inside foo.....1');
    
//     return 'Hello';

//     //console.log('inside foo....2'); This line of code is unreacheable
// }

// const result = foo();

// console.log(result);
// //To print Hello we have the result printed by

// result.then(data => console.log(data));

// console.log('end')



// console.log ('Start-7-3');

// async function foo() {

//     console.log('inside foo.....1');
    
//     throw new Error('Whoops!!');
// }

// const result = foo();

// result.then(data => console.log(data)).catch(err => console.log('Inside Catch:' +  err.message));

// console.log('end')


// console.log ('Start-7-4');

// const foo = async () => {

//     console.log('inside foo.....1');
    
//     throw new Error('Whoops!!');
// }

// const result = foo();

// result.then(data => console.log(data)).catch(err => console.log('Inside Catch:' +  err.message));

// console.log('end')


///AWAIT _ DEMO 8

// console.log('Start -8-1');

// async function foo (){

//     console.log ('Inside Foo...');
//     return 'Hello';
// }

// async function bar(){

//     console.log('1..........')

//     const result = await foo();
//     console.log('2..........')
//     console.log('World.....');
//     console.log(`Result of foo(): ${result}`);

    
// }

// bar()
// console.log ('End');

// async function foo() {

//     throw new Error ('Whoops');
// }

// async function bar() {

//     console.log('1....')

//     try {
//         await foo();
//     }
//     catch (error){
//         console.log ('Inside catch block, ', error.message);
//     } finally{
//         console.log ('inside finally');
//     }
//     console.log ('2.....');
// }

// bar();
// console.log ('End');


// const express = require('express');
// const app = express();


// app.get('/users', (req, res, next) => {
//     console.log(1);
//     next();
// }, (req, res, next) => {
//     console.log(2);
//     next('route');
// }, (req, res, next) => {
//     console.log(3);
//     next('route');
// },  (req, res, next) => {
//     console.log(3);
//     next('something');
// });

// app.get('/users', (req, res, next) => {
//     next('route');
//     console.log(5);
//     res.status(200).send('Success!');
// });

// app.get('/users', (req, res, next) => {
//     next('route');
//     res.status(200).send('Success!');
// });

// app.get('/users', (req, res, next) => {
//     next('route');
//     res.status(200).send('Success!');
// });


// app.use((err, req, res, next) => {
//     console.log(5);
//     res.status(500).send('Try later');
// });


// app.listen(3000);

// console.log('start');

// const result = new Promise((resolve, reject) => {
// console.log(1);
// setTimeout(() => reject('Whoops!'), 1000);
// console.log(2);
// })
// .then(res => res)
// .catch(error => 'Error Happens');
// console.log(result);
// console.log('end');


//const fs = require('fs');

//fs.readFile ('hello.txt', () => console.log('this is readFile 1'));
//fs.readFile('hello.txt', () => console.log('this is readFile 1'));

// setTimeout(() => console.log("this is setTimeout 1"), 0);


//const fs = require('fs');
//fs.readFile('hello.txt', () => console.log('this is readFile 1'));

// new Promise(resolve => resolve('Hi')).then(() => console.log("this is Promise.resolve 1"));
// process.nextTick(() => console.log("this is process.nextTick 1"));
//setTimeout(() => console.log("this is setTimeout 1"), 0);
// setImmediate(() => console.log("this is setImmediate 1"));
// for (let i = 0; i < 2000000000; i++) {}

// Exam Review Demos 


//Question One

/*console.log('start');

setTimeout(() => console.log('timeout 1'), 0);

setTimeout(() => {

    console.log('timeout 2')

    process.nextTick(() => console.log('nextTick 3'));

}, 0);

setTimeout(() => console.log('timeout 3'), 0);

new Promise((resolve, reject) => resolve('Hello')).then(() => console.log('Promise...1'));

new Promise((resolve, reject) => resolve('Hello')).then(() => console.log('Promise...2'));

process.nextTick(() =>  console.log('nextTick 1'));

process.nextTick(() =>  console.log('nextTick 2'));

console.log('end');*/



/*const fs = require('fs');


fs.readFile('hello.txt', () => {

    console.log('readFile....');

});

setTimeout(() => console.log('timeout'), 0);

setImmediate(() => console.log('Immediate'));*/


// var message = 'Hello World';

// function logMessage() {

//     console.log(this.message);

// }

// logMessage();

// console.log('start');

// new Promise((resolve, reject) => {

//     console.log('1');

//     resolve('2');

// }).then(console.log);

// console.log('end');

console.log('start');

async function foo() {

    console.log ('1');
    await bar();
    console.log('3');
}

foo();

console.log('end');

async function bar(){

    console.log('bar.....')
}