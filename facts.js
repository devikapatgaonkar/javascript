function factorialNum(num){
    if (num==0) {
        console.log(`Factorial of 0 is 1`);
        return;
    }
    let factorial=1;
    for (let index = num; index>=1; index--) {
      factorial=factorial*index
        
    }
    return factorial;
}
var result=factorialNum(5);
console.log(result);
// factorialNum(6);
// factorialNum(10);
// factorialNum(0)