
//Review IIFE, bind, apply, call methods first, what's the value of result in the console?

const result = (function(exports, module){

    exports = module.exports;

    exports.firstname = 'John';

    module.exports.lastname = 'Smith';

    exports = {

        getFullName: function(){

            console.log('John Smith')

        }

    }

    return module.exports;

}).apply(null, [null, {exports: {}}]);

console.log(result);

/* 
The value of the output is;

{ firstname: 'John', lastname: 'Smith' }


The result is assigned the value returned by the Immediately Invoked Fnction Expression
 IIFE, which is module.exports. module.exports has both firstname and lastname properties, 
but it doesn't have the getFullName method,because exports was reassigned to a new object within the IIFE.

Therefore, the value of result will be an object with only the firstname and lastname properties:


*/