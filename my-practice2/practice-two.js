

// async function foo() {

//     return 'hi';

// }

// console.log(foo());



console.log('start');

new Promise((resolve, reject) => {

    console.log('1');

    resolve('2');

}).then(console.log);

console.log('end');