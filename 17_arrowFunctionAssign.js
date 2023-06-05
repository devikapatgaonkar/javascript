


console.log(`***NO1***`);


let show = () => {
    console.log(`Good Morning,Today is Monday.`);
}

show()

console.log(`***NO2***`);
let multiplication = (num1,num2,num3=1) => {
    console.log(`NUM1: ${num1},NUM2: ${num2},NUM3: ${num3}`);
    let multiply = num1*num2*num3;
    console.log("Multiplication of given numbers are :",multiply);
}
multiplication(5,5,2);
multiplication(10,4)

console.log(`***NO3***`);
let addition = (n1,n2,n3,n4,n5) => {
    let add = n1+n2+n3+n4+n5;
    return add;
}
let add1= addition(100,100,200,349,756);
console.log(`Addition of given values are ${add1}`);

let add2 = addition("I am"," learning"," ES6"," features"," in depth")
console.log(`Addition of given string ${add2}`);