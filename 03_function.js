


function show() {
console.log("Show Function");
}
console.log("Before Function");
show(); //function call or invoke
console.log("After function");
show();
show();
show();

var numOne = 100;
var numTwo = 200;
var name1 = "Bill Gates";
var name2 = "Elon Musk";

function swapVariable(valueOne,valueTwo){ //Arguments: valueOne=numOne
   console.log("Before swap",valueOne,valueTwo);
    //var valueOne = 100
    //var valueTwo =200
    var temp = valueOne;
    var valueOne = valueTwo;
    var valueTwo = temp;
    console.log("After Swap:", valueOne,valueTwo);

}
swapVariable(numOne,numTwo);//100 200
swapVariable(name1,name2)