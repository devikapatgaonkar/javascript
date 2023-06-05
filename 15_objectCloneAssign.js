

const arrayNum =[20,3,4,56,90,400,49];
console.log(`Array nums are : ${arrayNum}`);
console.log(`---------------------------------------------`);
console.log(`***Shallow cloning***`);
const clonedArray = arrayNum;
console.log("Cloned Array before update :",clonedArray);
const clonedArray1 = clonedArray.push(55,66);
console.log("Cloned Array after update :",clonedArray);
console.log("Array Num after update :",arrayNum);

console.log(`---------------------------------------------`);

console.log(`***Deep Cloning***`);
const clonedNum = [...arrayNum];
const arrayNum1 = arrayNum.push(10,25);
console.log("Array num after entering element 10,25:",arrayNum);
console.log("Cloned Array After deep cloning:",clonedNum);

console.log(`---------------------------------------------`);
console.log(`***Deep Cloning***`);
var arrayEven = [...arrayNum];
var arrayEven = [2,30,14,8]
console.log("Array Even Before Update :",arrayEven);
var arrayEven1 = arrayEven.concat(arrayNum);
console.log("Array Even concated with Array Num is :",arrayEven1);
console.log(`Array Num is :`,arrayNum);
console.log(`---------------------------------------------`);




console.log(`***Deep Cloning of Nester Object`);
const employeeInfo = {
    empId:27,
    empName:"John Doe",
    salary:{
        julyMonth:"40,0000INR",
        augMonth : "50,0000INR",
        junMonth : "65,0000INR"
    },
    address:{
        locality:{
            colony: "Om Vrindavan Society",
            street: "Kanch Pokli 431202",
        },
        city: "Mumbai",
        state: "Maharastra",
        country: "India"
    },
    mobile:["+91 8600 3456 88","1800- 4567 32","+91- 9096 5678 77"]
}

console.log("Locality:",employeeInfo.address.locality);
console.log(`---------------------------------------------`);
console.log("City :",employeeInfo.address.city);
console.log(`---------------------------------------------`);
console.log("State :",employeeInfo.address.state);
console.log(`---------------------------------------------`);
console.log("Country : ", employeeInfo.address.country);
console.log(`---------------------------------------------`);
console.log("Mobile No :",employeeInfo.mobile);
console.log(`-------------------JSON.Stringfy--------------------------`);
const clonedEmployeeInfo = JSON.parse(JSON.stringify(employeeInfo));
clonedEmployeeInfo.salary.julyMonth = "80,0000INR";
console.log("Updated Cloned Employee Info for July Month is:",clonedEmployeeInfo.salary.julyMonth);
console.log("Value of July Month Salary in Orginal Employee Info is :",employeeInfo.salary.julyMonth);
console.log(`---------------------------------------------`);
employeeInfo.address.country = "United KIngdom";
console.log("Updated Employee info of Country is :",employeeInfo.address.country);
console.log("Value of Cloned Employee Info of Country is :" , clonedEmployeeInfo.address.country);

