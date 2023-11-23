


// class Person {

//     constructor(name = 'John') {

//         this.name = name;

//     }


//     getName() {

//         console.log(this.name);

//     }

// }

// exports = new Person('Bella');

function getFullName(firstname, lastname){

    return `${firstname} ${lastname}`
}

exports = {
    getFullName

};
module.exports.firstname = 'John';
module.exports.lastname = 'Smith';

exports.printName = function (firstname, lastname){
    console.log(`${firstname} ${lastname}`);
};