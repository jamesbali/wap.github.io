/*What's the output of the code below when running in Node.js? 
If for the same code running in browser, what's the output? Why is the output different?*/

var message = 'Hello World';

function logMessage() {

    console.log(this.message);

}

logMessage();

/* The out of the code is:

undefined
If the same code is run the browser environment, the output will be:

 Hello World
 
 This is because, in a browser environment, the this keyword inside a function refers to the global object (window), 
 and window.message will correctly access the global variable message.
*/