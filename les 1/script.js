console.log("Hello, SmartNinja!");
//alert("I typed this!!")


console.log("Hello, Ninja!");
//console als helpt u als developer om dingen te printen.
//Dit is equivalient met print statement in Pyhton

// als je op TAB drukt neemt hij de eerste in de lijst.


console.log("test");

//verschil tussen schrijven en runnen is wanneer de code wordt ge'EXCECUTE'

/*
JavaScript Variables

dingen gaan benoemen zodat je ze later kan gebruiken

X + Y = 5 
5 is een constante 

Y en X kunnen verschillende waarden bevatten (een variabele waarde).
In deze expressie.

een statement is een lijn code 
elke statement eindigt met een PUNTKOMME ; 
die heeft u interpreter nodug om te weten welk stukje code bij elkaar hoort.
"" Dubbele quote gebruiken voor variable die nog kan veranderen 
'' enkele quotes kan veranderen




*/



let num = 22;
let someName = "Matt";
let bool = false;
let nothing = null;

console.log(num);
console.log(someName);
console.log(bool);
console.log(nothing);

let lastName = "Van Gool";




/*Verschillende SCOPE
var = variable 
CONST = constante
 let in front of the variable name (this is called "declaration")

camCase

syntax error unidentified 

JS is case sensitive

*/


// JS array (equivalent of a Python list)
let someArray = [1, 5, 67, "hey", 245, true];

// JS object (looks similar to a Python dictionary)
let someObject = {name: "Matt", age: 22, admin: false};



console.log(someArray[1]);



let mood = "happy";

if (mood === "happy") {
    console.log("It's great to see you happy!");
} else {
    console.log("Cheer up!");
}

// = teken is een assigment operator
// =  1 gelijkaan teken is enkel gebruikt om te asignen



console.log("22" == 22)  // returns true
console.log("22" === 22)  // returns false (as it should)




//== of ===  drie gelijkaantekens betekent dat de variablele hetzelfde type
// IF STATEMENT can good in FlowDiagram
// Integer = een geheel getal
// if you squeeze it like duck, its a duck



// SWITCH STATEMENT

// wordt gebruikt om verschillende states te checken, totdat de juiste gevonden wordt of de Fallback bereikt wordt.

// see here https://www.w3schools.com/Js/js_switch.asp


//WHILE LOOP

let counter = 0;

while (counter <= 5) {
    console.log("Counter is less than 5, counter is " + counter);
    counter++;
}


// FOR LOOP 
// IETS HERHALEN TOT EEN VOORAF BEPAALD PUNT


let animals = ["dog", "cat", "bunny"];

for (var animal of animals) {
    console.log(animal);
}



let animalList = ["dog", "cat", "bunny"];

for (let i = 0; i < animalList.length; i++) {
    console.log(animalList[i]);
}

// hij loopt over de lijst


for (let i = 0; i <10; i++) {
	console.log(i);
}



// nameSpace 
// globaal beschikbaar vs enkel in de functie
// Global variables


function sum(x, y) {
    console.log(x + y);
}

sum(34, 55);
sum(12, 21);



for (var z = 0; z < 5; z++) {
    console.log(z);
}

console.log("Outside of for loop (var): " + z);



for (let a = 0; a < 5; a++) {
    console.log(a);
}

console.log("Outside of for loop (let): " + a);  // should throw an error



console.log(anotherVar);


console.log("35" + 5);  // result is string "355"
console.log("35" - 5);  // result is integer 30









