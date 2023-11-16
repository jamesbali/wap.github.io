
// What's the output of the code below? Try to understand how it works as we explained in the class.

const fs = require('fs');


fs.readFile('hello.txt', () => {

    console.log('readFile....');

});

setTimeout(() => console.log('timeout'), 0);

setImmediate(() => console.log('Immediate'));

/* The output of the code is shown below;

timeout
readFile...
Immediate

The output is consistent with the execution of the node eventloop

setTimeout callbacks are processed in the macrotask phase.
Callbacks from asynchronous operations, such as fs.readFile, 
are processed in the callback queue.
setImmediate callbacks are processed in the check phase, 
during the iteration of the event loop.

*/