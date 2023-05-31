class Vechile {
    constructor(name,model,price,color,mileage){
        this.name = name;
        this.model = model;
        this.price = price;
        this.color = color;
        this.mileage = mileage;
        console.log(`Details of Vechile : Name:${this.name}, Model:${this.model}, Price:${this.price}, Color:${this.color}, Mileage:${this.mileage}`)
    }
    
}

const tata = new Vechile("TaTa", "2008", "5lac" , "white" , "18km/hr")
const bmw = new Vechile("BMW", "2020", "32lac", "Black","8km/hr")
const ferrari = new Vechile("Ferarri","2022","2.3cr","Red","5km/hr")
const audi = new Vechile("Audi","2023","35lac","Marron","12km/hr")
const jauguar = new Vechile("Jauguar","2022","30lac","Matt Black","15km/hr")

const array = [tata,bmw,ferrari,audi,jauguar]

console.log(`***No2***`);
class College {
    constructor(name,location,department,codeNo){
        this.name = name;
        this.location = location;
        this.department = department;
        this.codeNo = codeNo;
        
    }
}
const mumbai = new College("Saint Xavier","Mumbai","Science","001")
const pune = new College("RMD","Pune","Engineering","002")
const kolhapur = new College("D.Y Patil","Kohlapur","Agriculture","003")
const nashik = new College("Bharati Vidyapeeth","Nashik","Medical","004")

let traverseObject = function(College){
    for (const key in College) {
        if (Object.hasOwnProperty.call(College, key)) {
            const element = College[key];
            console.log(`${key}:${element}`);
            
        }
    }
}
traverseObject(mumbai);
console.log(`-------------------------`);
traverseObject(pune);
console.log(`-------------------------`);
traverseObject(kolhapur);
console.log(`-------------------------`);
traverseObject(nashik)

 

