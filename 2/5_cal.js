function plus(a, b) {
    // console.log(a, b); // undefined
    console.log(a + b); // NaN
}

// console.log(a); // error

function divide(a, b) {
    console.log(a / b);
}
plus(60, 8);
divide(98, 20);