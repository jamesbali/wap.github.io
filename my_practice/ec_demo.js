//console.log(x);
// console.log(y)
// var x = 10;
// let y = 9;
// const z = 10;
// console.log (x);
// console.log(y);
// console.log(z);

//Scenario Two

// foo();
// bar();

//  function foo (){
//     console.log ('foo....');
// }
// var bar = function(){

//     console.log('bar ....');
// }

// let x = 10;
// //foo(x,20);
// console.log(x);
// function foo(x,y){

//     console.log(x,y);
//     if(x > 10){

//         var m = 100;
//     }
//     var bar = function(){

//         y = x + m + 20;
//     }
//     bar(1);
//     console.log(y);
// }

// console.log(x);

//     function a() {
//     console.log(p); // consult Global for x and print 20 from Global
//     }
//     function b() {
//     const p = 8;
//     const x = 10;
    
//     a(); // consult Global for a
//     }
//    const x = 20;
//     b();
// Review Binding

function foo (){

    console.log(this)


}
foo(); // this = window.This in one of the ways to 
//invoke a function;

//2. The second way to invoke a function is using
// the call method
//The value of the first parameter in the call function shall be the value
// the this keyword.


foo.call();

//3. The third way to invoke a function is using the
// the .apply method

foo.apply();

