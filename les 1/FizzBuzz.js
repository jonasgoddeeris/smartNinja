let num = 1;

while (num < 30) {
    if (num % 3 === 0 && num % 5 === 0) { console.log("FizzBuzz");
    } else if (num % 3 === 0 && num % 5 !== 0) {
    console.log("Fizz");
    } else if (num % 3 !== 0 && num % 5 === 0) {
    console.log("Buzz");    
    } else {
    console.log(num);
    }
    num++;
}



// for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)



// OPLOSSING VAN DIMITRI
// let num = {
//     first: 3,
//     second: 5
// };
// let output = {
//     first: "Fizz",
//     second: "Buzz",
//     third: "FizzBuzz"
// };
// let counter = 1;
// while (counter <= 20){
//     if (counter % num.first + counter % num.second === 0){
//         console.log(output.first + output.second);
//     } else {
//         if (counter % num.first === 0){
//             console.log(output.first);
//         } else {
//             if (counter % num.second === 0){
//                 console.log(output.second);
//             }
//             else {
//                 console.log(counter);
//             }
//         }
//     }
// counter++
// }