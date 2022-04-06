function add(num1, num2){
    return num1 + num2;
}

const add2 = function (num1, num2){
    return num1 + num2;
}

const add3 = (num1, num2) =>  num1 + num2;

const getName = () => 'Emon Shimoul'; 

const sum = add(3, 2);
const sum2 = add2(33, 22);
const sum3 = add3(333, 222);
console.log(sum, sum2, sum3);
const myName = getName();
console.log(myName);