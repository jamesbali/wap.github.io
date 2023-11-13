

// x = 1;
// var a = 5;
// var b = 10;
// var c = function(a, b, c) {

// console.log( 'x1: ' + x);

// console.log('a2: ' + a);
// var f = function() {
// b = a;
// console.log('b3: ' + b);
// b = c;
// var a = 3;
// }
// f();
// console.log('b4: ' + b);
// x = 6;
// }
// c(8, 9, 7);
// console.log('b5: ' + b);

// console.log('x6: '+ x);

// console.log ('****** Quiz Question *********')


// var c = 5;

// let b = 7;
// function f(a,b) {
//     b = 20;
//     console.log (c);
//     console.log (b);
//     g(a,9,10);
//     var c = 0;
//     console.log (c)

//     function g() {

//         console.log(b);
//         b = c;
//     }
// }
// f(1,2,3);

// console.log (b);
// console.log(c);



// function b() {
//     const y = 30;
//     a();
//     function a() {
//     console.log(x, y);
//     }
//     var x = 10;
//     console.log(x, y);
//     }
//     const x = 20;
//     var y = 40;
//     b();



// myObj = {
//     myname: 'james',
//     callname: function(){
//         console.log("helo " , this.myname)
//     } 
// }

//console.log(myObj.callname)



//myObj.callname('hello');

// myfunc = function(greeting){
//     let myname = 'James'
// console.log(`${greeting}, ${myname}`)
// }

// console.log(myfunc)


//myfunc = myObj.callname;

// setTimeout(()=>myObj.callname.call(myObj),0)

 var name = "Global";

 function greet() {
     console.log("Hello, " + this.name + "!");
 }
 
 greet();


 var a = 2;
let b = 3;
function outer() {
let c = 5;
var d = 7;
return function inner() {
b = 8;
let c = 9;
console.log(a); //2
console.log(b); //8
console.log(c); //9
console.log(d); //7
}
}
outer()();

function log(e) {
    console.log(e);
    }
    let arr = [1, 2, 3];
    console.log("start")
    setTimeout(() => arr.forEach(log));
    console.log("end")