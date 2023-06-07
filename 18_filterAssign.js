
const arrayNums = [20,11,40,25,37,49,9,90,60,2,19];
console.log("Given array is :",arrayNums);
console.log(`***NO1***`);
const greatNumber = arrayNums.filter((element)=>{
 return element>50;
})
console.log("Element Greater than 50 in given array is :",greatNumber);

console.log(`***NO2***`);
const evenNums = arrayNums.filter((element)=>{
    return element%2==0;
})
console.log("Even numbers in given array is :",evenNums);

console.log(`***NO3***`);
const oddNums = arrayNums.filter((element)=>{
    return element%2;
})
console.log("Odd numbers in given array is :",oddNums);

console.log(`***NO4***`);
const multiple = arrayNums.filter((element)=>{
    return element%5==0;
})
console.log("Multiple of 5 in given array is :",multiple);

console.log(`***NO5***`);

const between = arrayNums.filter((element)=>{
    return element>20 && element<50;
})
console.log("Number between 20and 50 in given array is:",between);