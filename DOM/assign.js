const array = [10,5,'a','b','h',11];
let string = [];
let num =[]
array.forEach(element => {
    if (typeof(element)=="number") {
        num.push(element)
        
    }
    if (typeof(element)=="string") {
        string.push(element)
    }
});
//console.log(num);
console.log(string);
const number = num.sort((n1,n2)=>{
    return n1 > n2 ? 1: -1
})
console.log(number);


//for (const num of array) {
 //   let number = num.includes(typeof String)
 //   console.log(number);
//}
/*const element = array.sort()
console.log(element);

const number = element.filter((num)=>{
    
    return num<12;
})

const num=number.sort( (n1, n2) => {
    return n1 > n2 ? 1 : -1 ;
 } );
 console.log(num);*/
 
 
 