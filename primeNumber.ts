// find prime Number
function findPrimeNumber(num:number) { 

let isPrime = true;

////through loop
for (let i = 2; i < num; i++) {
    let result = num % i ;
    if (result === 0) {
        console.log ("Number ", num , " is not prime.");
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log ("Number ", num, " is prime.");
}
}
// call the function
findPrimeNumber(7);