

const arrayNums = [1,-7,40,502,-77,91,0,108,89,-601]
console.log(`***NO1***`);
let elements = [];
let arrayIndex=[];
arrayNums.forEach ( (element,index)=>{
elements.push(element)
arrayIndex.push(index)


})
console.log("Elements of given array is:",elements);
console.log("Index of given array is :",arrayIndex);


console.log(`***NO2***`);
let number = [];
arrayNums.forEach((element)=>{
if (element>0) {
    number.push(element)
    
}
})
console.log("Positive number in given array are:",number);

console.log(`***NO3***`);
let negativeNumbers =0;
arrayNums.forEach((element)=>{
if (element<0) {
    negativeNumbers=negativeNumbers+element;
    
    
}
})
console.log("Sum total of negative number is:",negativeNumbers);

console.log(`***NO4***`);
let evenNums = [];
arrayNums.forEach((element)=>{
    if (element%2==0) {
        evenNums.push(element)
    }
})
console.log("Even number in given array are :",evenNums);

console.log(`***NO5***`);
let sumOfElement = 0;
arrayNums.forEach((element)=>{
sumOfElement=sumOfElement+element;
})
console.log("Sum of all element in array is: ",sumOfElement);

console.log(`***NO5***`);
let evenIndex=[];
arrayNums.forEach((element,index)=>{
if (index%2==0) {
    evenIndex.push(element)
}
})
console.log(`Even index value elements are:${evenIndex}`);