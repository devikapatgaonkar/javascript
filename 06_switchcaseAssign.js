function month(monthName){
    switch (monthName) {
        case 1:
            console.log(`${monthName} : January `);
            break;
            case 2:
            console.log(` ${monthName}: February `);
            break;
            case 3:
            console.log(` ${monthName} :March  `);
            break;
            case 4:
            console.log(` ${monthName} : April `);
            break;
            case 5:
            console.log(` ${monthName} : May `);
            break;
            case 6:
            console.log(` ${monthName} : June `);
            break;
            case 7:
            console.log(` ${monthName} : July  `);
            break;
            case 8:
            console.log(` ${monthName} : August`);
            break;
            case 9:
            console.log(` ${monthName} : September `);
            break;
            case 10:
            console.log(` ${monthName} : October `);
            break;
            case 11:
            console.log(` ${monthName} : November `);
            break;
            case 12:
                console.log(`${monthName} : December`);
            break;
    
        default:
            console.log(`Invalid Input : ${monthName}`);
            break;
    }
}
month(0);
month(2)
month(5);
month(12);
month(15);
month(100);
month(null);
month(undefined);