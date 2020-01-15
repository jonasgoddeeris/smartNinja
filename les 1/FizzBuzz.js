
Telt tot 16




for (let a = 0; a < 16; a++) {
    console.log(a);
}

console.log("Outside of for loop (let): " + a);  // should throw an error











---


let number = 0;

while (number < 15) {
    if (number%3 === 0 && number%5 = 0) { 
    	console.log("FizzBuzz");
    }
    else if (number%3 === 0 && number%5 !=== 0) {
    console.log("Fizz");
    }
    else if (number%3 !=== 0 && number%5 === 0) {
    console.log("Buzz");	
    }
    else {
    console.log(number);
    }
    counter++;
}