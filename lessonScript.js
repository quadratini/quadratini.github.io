//template literals
// so template literals sounds hard but it's easy.
// it's when you're using backticks, if you want to access
// a variable you can just put ${ (variablename) } and then the variable will be accessed"

let ronnyMoney = 10;
let stephenMoney = 20;

let array = [0, 0, 1, 3, 4];

console.log(array);


function getSum(a, b) {
    let sum = a + b;
    return sum;
}

let totalMoney = getSum(ronnyMoney, stephenMoney);

