// const age = prompt('How old are you?');

// console.log(age);
// console.log(typeof age);
// console.log(typeof "15", typeof parseInt("15"));
// console.log(age, parseInt(age));
// console.log(typeof parseInt(age))

const age = parseInt( prompt(`How old are you?`) ); // -> 함수는 내부에서 외부로 실행

// console.log(age);

// console.log(isNaN(age));

if(isNaN(age) || age < 0) { // age가 NaN일때
    console.log("Please write a real positive number.");
    // condition === true
} else if (age < 18) {
    console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink.");
} else if (age > 50 && age <= 80) {
    console.log("You should exercise.");
} else if (age === 100) {
// } else if (age !== 100) {
    console.log("wow you ar wise.");
} else if (age >= 80) {
    console.log("You can do whatever you want.");
} else {
    // condition === false
    console.log("You can't drink.");
}