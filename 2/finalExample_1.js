// const calculator = {
//     add: function(a, b) {
//         console.log(a + b);
//     },
//     minus: function(a, b) {
//         console.log(a - b);
//     },
//     multiply: function(a, b) {
//         console.log(a * b);
//     },
//     divide: function(a, b) {
//         console.log(a / b);
//     },
//     remain: function(a, b) {
//         console.log(a % b);
//     },
//     square: function(a, b) {
//         console.log(a ** b);
//     },
// };

// calculator.add(10, 3);
// calculator.minus(10, 3);
// calculator.multiply(10, 3);
// calculator.divide(10, 3);
// calculator.minus(10, 3);
// calculator.square(10, 3);

// console.log(calculator.add(2, 4)); // 출력 값 확인


const calculator = {
    add: function(a, b) {
        return a + b
    },
    minus: function(a, b) {
        return a - b
    },
    multiply: function(a, b) {
        return a * b
    },
    divide: function(a, b) {
        return a / b
    },
    square: function(a, b) {
        return a ** b;
    },
    remain: function(a, b) {
        return a % b
        console.log('hello'); // 이미 함수가 끝나서 작동되지 않음, return문의 위쪽에 사용하면 작동함
    },
};

calculator.add(2, 3); // 이것 또한 아무 일도 일어나지 않음

const addResult = calculator.add(2, 3);
console.log(addResult);

const minusResult = calculator.minus(addResult, 10);
const multiplyResult = calculator.multiply(10, minusResult); // 상호 의존적
const divideResult = calculator.divide(multiplyResult, addResult);
const squareResult = calculator.square(divideResult, minusResult);
const remainResult = calculator.remain(squareResult, multiplyResult);