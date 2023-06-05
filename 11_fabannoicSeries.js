//0112358;



var n =0;
var n1 = 1;
//console.log(n);
var num2 = n+n1
//console.log(n1);


for (let index = 0; index <10; index++) {

    num2 = n+n1;
    
    n=n1;
    n1 =num2;
   // console.log(num2);
    
}



const number = 10;
var x = 0;
var y = 1;
console.log(x);

var fn = x+y;
console.log(fn);

while (fn<10) {
    //console.log(fn);
    fn = x+y

    x = y;
    y = fn
    
    console.log(fn);
}