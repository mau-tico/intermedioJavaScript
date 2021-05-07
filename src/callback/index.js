/* function sum(num1, num2) {
    return num1 + num2;
};

function calc(num1, num2, callback) {
    return callback(num1, num2);
};

console.log(calc(2, 2, sum)); */

const sum = (num1, num2) => {
    return num1 + num2;
}; 

const calc = (num1, num2, callback) => {
    return callback(num1, num2);
};

console.log(calc(2, 2, sum));

const date = (callback) => {
    console.log(new Date);
    setTimeout(() => {
        let date = new Date;
        callback(date);
    }, 3000);
};

const printDate = (dateNow) => {
    console.log(dateNow);
};

date(printDate);