const arrayNumber = [20,11,40,25,23,11,9,31,60,2,19];
console.log("Given Array is :",arrayNumber);
console.log(`***NO1***`);
const arrayTrans = arrayNumber.map((element)=>{
return element+10;
})
console.log("Add 10 to each element of aaray",arrayTrans);

console.log(`***NO2***`);
const arraySquare = arrayNumber.map((element)=>{
return element*element
})
console.log("Square of element in Array is :" ,arraySquare);

console.log(`***NO3***`);

let indexAddition = arrayNumber.map((element,index)=>{
    return element+index
})
console.log("Adding index value in corresponding element is:",indexAddition);

