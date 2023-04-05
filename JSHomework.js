// 1 task
let odd = 1;

while(odd <= 2000) {
    console.log(odd);
    odd += 2;
}






// 2 task
let even = 0;

while(even >= -2000) {
    console.log(even);
    even -= 2;
}






// 3 task
for(let distance = 0; distance <= 100; distance++) {
    if(distance === 10 || distance === 25 || distance === 75 || distance === 90) {
        console.log(`გილოცავთ, თქვენ გაიარეთ ${distance} კილომეტრიანი ჩექფოინთი`);
    } else {
        console.log(distance);
    }
}






// 4 task
let oddAddition = 0;

for(let oddNumber = 1; oddNumber <= 25000; oddNumber += 2) {
    oddAddition += oddNumber;
}

console.log(oddAddition);





// 5 task
let odds = 0;

for(let oddStarter = 501; oddStarter <= 800; oddStarter += 2) {
    odds += oddStarter;
}

let evens = 0;

for(let evenStarter = 1000; evenStarter <= 2000; evenStarter += 2) {
    evens += evenStarter;
}

console.log(odds + evens);





// 6 task
let factorialMultiplication = 1;

for(factorial = 1; factorial <= 12; factorial++) {
    factorialMultiplication = factorialMultiplication * factorial;
}

console.log(factorialMultiplication);




// 7 task
for(let divisionNumber = 1; divisionNumber <= 300; divisionNumber++) {
    let leftover = 300 % divisionNumber;
    if(leftover === 0) {
        console.log(divisionNumber);
    }
}




// 8 task
for(let x = 1; x <= 8035; x++) {
    let perfectDivision = 8035 % x;
    if(perfectDivision == 0) {
        console.log(x);
    }
}




// 9 task
let y = 17; 

let isPrime = true;
for(let primeDetector = 2; primeDetector <= Math.sqrt(y); primeDetector++) {
  if(y % primeDetector === 0) {
    isPrime = false;
    break;
  }
}

if(isPrime) {
  console.log(y + " არის მარტივი რიცხვი");
} else {
  console.log(y + " არ არის მარტივი რიცხვი");
}
