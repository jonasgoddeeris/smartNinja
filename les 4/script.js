var test1 = 'Blablabla'
console.log("test 1 = " + test1);

var test2 = 'Bloemboemboem'

console.log("test 1 = " + test1);
console.log("test 2 = " + test2);


function someScope() {
    let someVariable = "hey hey hey";
    console.log(someVariable);
}


someScope();
console.log(someScope);


// implicit return




function ninja(arg1, arg2) {
	let sum = arg1 + arg2;
	return sum;
}

console.log(ninja(3, 4));


// declareren
// oproepen
// parameters = variabelen dat je oproept met de functie



(function() {
    let someVariable = "hey  hoi hey hey";
    console.log(someVariable);
}());


function calculateSum(x, y) {
	console.log(x, y);
}

calculateSum(5, 40);


let sumNumbers = function(x, y) {
    console.log(x + y);
}

sumNumbers(3, 4);


// statement = tot en met punt komma in een functie
// argumenten zijn x en Y

// Anon function = anonomous function




