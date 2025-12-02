
function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) sum += i;
    return sum;
}
console.log("Сума чисел від 1 до 5:", calculateSum(5)); 


const multiply = function(a, b) {
    return a * b;
}
console.log("3 * 4 =", multiply(3, 4)); 


const power = (a, b) => a ** b;
console.log("2^3 =", power(2, 3)); 


function createMultiplier(multiplier) {
    return function(x) {
        return x * multiplier;
    }
}
const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log("Подвоєння 5:", double(5)); 
console.log("Потрійне 5:", triple(5)); 


function applyFunction(value, func) {
    return func(value);
}
console.log("Подвоєння 6:", applyFunction(6, double)); 
console.log("Квадрат 4:", applyFunction(4, x => x ** 2)); 


function processSet(set, callback) {
    for (let item of set) {
        callback(item);
    }
}
const mySet = new Set([1, 2, 3, 4]);
processSet(mySet, x => console.log("Елемент *2 =", x*2));
