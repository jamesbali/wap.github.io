const a = [8, 18, 12, 36, 18, 38, 14];

function sum(arr = []) {
    return arr.filter(n => n > 20).reduce((acc, current, index, array) => acc + current);
};

console.log(sum(a));

const getNewArray = function (str = []) {
    return str.filter(item => item.length >= 5).filter(item => item.includes('a'))
};

const b = ["Fairfield", "Desmoine", "Dallas", "Detroit", "Houston", "Portland", "Denever", "Miami","Madison"];
console.log(getNewArray(b));

const concat = (...values) => values.reduce((acc, currentValue) => acc.concat(currentValue), []);

const result = concat('hi', [1, 2, 3], ['Hello', 'world']);
console.log(result);



