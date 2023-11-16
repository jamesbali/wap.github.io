

console.log('start');

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

console.log('end');

/*The Outout of the code is:
    start
    end
    nextTick 1
    nextTick 2
    Promise...1
    Promise...2
    timeout 1
    timeout 2
    nextTick 3
    timeout 3
    
    This output correctly reflects the order of execution based on the priorities in the Node.js event loop. 
    
    Synchronous code executes first (start, end).

    Microtasks (process.nextTick) are executed next (nextTick 1, nextTick 2). 
    These microtasks have higher priority and are executed before the next macrotask.

    Promises are executed as microtasks (Promise...1, Promise...2).

    setTimeout callbacks are executed as macrotasks (timeout 1, timeout 2, timeout 3).
    The process.nextTick callback inside the second setTimeout (nextTick 3) is added to the microtask queue. 
    This microtask is executed after the setTimeout callbacks but before the next macrotask.

    This output aligns with the expected behavior of the Node.js event loop, 
    where microtasks are prioritized over macrotasks, and within microtasks, process.nextTick has higher priority than Promises.


    
END*/
