// 5! = 5 * 4 * 3 * 2 * 1

let factorial = 1; // 120

for (let index = 5; index >= 1; index--) { // index = 5  4  3  2  1  0

    factorial = factorial * index; // 120 * 1 

}

//console.log(`Factorial ${factorial}`);

function factorialNum(num){
    if (num==0) {
        console.log(`Factorial of 0 is 1`);
        return;
    }
    let factorial=1;
    for (let index = num; index>=1; index--) {
      factorial=factorial*index
        
    }
    console.log(`Factorial ${factorial}`);
}
factorialNum(5);
factorialNum(6);
factorialNum(10);
factorialNum(0)