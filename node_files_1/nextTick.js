// const fs = require ('fs');
// console.log ('Start');
// fs.readFile ('hello.txt', () => console.log('This is readFile One'));
// console.log ('End');
//setTimeout(() => console.log ('timeout'),0);


//Asynchronous API - II
// console.log ('Start');
// process.nextTick(()=> console.log ('Next Tick'));
// console.log('End');


//Asynchronous API III -> setTimeout
// console.log ('Start');
// setTimeout(() => console.log ('TimeOut')); // In this case, both setTimeout and nextTick are asynchronous.
// process.nextTick(()=> console.log ('Next Tick 1'));
// process.nextTick(()=> console.log ('Next Tick 2'));
// process.nextTick(()=> console.log ('Next Tick 3'));
// process.nextTick(()=> console.log ('Next Tick 4'));
// process.nextTick(()=> console.log ('Next Tick 5'));
// process.nextTick(()=> console.log ('Next Tick 6'));
// console.log('End');


//Asyncronous API- IV - Promise
// console.log('Start')
// const prom1 = new Promise(function( resolve, reject){
//     console.log ('Inside promise');
//     resolve('Hello');
// });
// prom1.then(data => console.log(data));
// console.log ('End');

//Aynchronous API -V - nextTick vs Promise order of execution
//process.nextTick callback has a higher priority of execution over promise 
// console.log('Start');
// new Promise ((resolve , reject) => resolve ("Hello")).then(()=> console.log("Promise ....."));
// process.nextTick(() => console.log('The nextTick'));
// console.log('End')

//Aynchronous API -VI - nextTick vs Promise Vs Timeout callabck  order of execution

//nextTick => Promise => Timeout 

// console.log('Start');
// setTimeout(() => console.log('Set Timeout executuon ..1'));
// setTimeout(() => console.log('Set Timeout executuon ..2'));
// new Promise ((resolve , reject) => resolve ("Hello")).then(()=> console.log("Promise ....1"));
// new Promise ((resolve , reject) => resolve ("Hello")).then(()=> console.log("Promise ....2"));
// process.nextTick(() => console.log('The nextTick ..1'));
// process.nextTick(() => console.log('The nextTick ..2'));
// console.log('End')

//Aynchronous API -VII - nextTick vs Promise Vs Timeout callabck  order of execution

// console.log('Start');
// setTimeout(() => console.log('Set Timeout executuon ..1'));
// setTimeout(() => {

//     process.nextTick(() => console.log ('Modified Next tick'))

// });
// setTimeout(() => console.log('Set Timeout executuon ..2'));
// new Promise ((resolve , reject) => resolve ("Hello")).then(()=> console.log("Promise ....1"));
// new Promise ((resolve , reject) => resolve ("Hello")).then(()=> console.log("Promise ....2"));
// process.nextTick(() => console.log('The nextTick ..1'));
// process.nextTick(() => console.log('The nextTick ..2'));
// console.log('End')

//Asynchronous API event loop- Demo VIII

// const fs = require ('fs');
// console.log ('Start');
// fs.readFile('hello.txt', () => console.log ('readFile.....'))
// new Promise ((resolve, reject ) => resolve ('Hello')).then(()=> console.log('Promise....'))
// process.nextTick(() => console.log ('next tick'));
// console.log ('End');

//LAB-10 - QUESTION TWO
//console.log('start');

// setTimeout(() => console.log('timeout 1'), 0);

// setTimeout(() => {

//     console.log('timeout 2')

//     process.nextTick(() => console.log('nextTick 3'));

// }, 0);

// setTimeout(() => console.log('timeout 3'), 0);

// new Promise((resolve, reject) => resolve('Hello')).then(() => console.log('Promise...1'));

// new Promise((resolve, reject) => resolve('Hello')).then(() => console.log('Promise...2'));

// process.nextTick(() =>  console.log('nextTick 1'));

// process.nextTick(() =>  console.log('nextTick 2'));

// console.log('end');

// QUESTION THREE

// var message = 'Hello World';

// function logMessage() {

//     console.log(this.message);

// }

// logMessage();

const fs = require ('fs');

fs.readFile ('hello.txt', () => console.log ('readFile......'));
setTimeout(()=> console.log ('Timeout'));